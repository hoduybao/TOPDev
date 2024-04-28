import { useMemo, useState } from 'react';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { DeleteOutlined } from '@ant-design/icons';
// import {  PlusCircleOutlined } from '@ant-design/icons';

import ApplicationCard from './ApplicationCard';

import { KanbanColumn, Id, KanbanApplicationType } from '@/+core/utilities/types/recruitment.type';

interface PropType {
  column: KanbanColumn;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  applications: KanbanApplicationType[];
  createApplication: (columnId: Id) => void;
  deleteApplication: (id: Id) => void;
}

const ColumnContainer = (props: PropType) => {
  const { column, deleteColumn, updateColumn, deleteApplication, applications } = props;

  const [editMode, setEditMode] = useState(false);

  const applicationsIds = useMemo(() => {
    return applications.map((application) => application.id);
  }, [applications]);

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className='bg-gray-300 opacity-40 border-2 border-primary-red w-[350px] h-[calc(100vh-46px-100px)] max-h-[calc(100vh-100px)]
                    rounded-md flexflex-col'
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className='bg-[#fff] w-[350px] h-[calc(100vh-46px-100px)] max-h-[calc(100vh-100px)] rounded-md flex flex-col'
    >
      {/* Column title */}
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className='bg-primary-red text-[#fff] text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3
                    font-semibold flex items-center justify-between'
      >
        <div className='flex gap-2'>
          {!editMode && column.title}
          {editMode && (
            <input
              className='bg-[#fff] text-[#000] focus:border-blue-400 border rounded outline-none px-2'
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== 'Enter') return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className='hover:bg-secondary-red rounded p-2'
        >
          <DeleteOutlined className='text-xl' />
        </button>
      </div>

      {/* Column application container */}
      <div className='flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto'>
        <SortableContext items={applicationsIds}>
          {applications.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
              deleteApplication={deleteApplication}
            />
          ))}
        </SortableContext>
      </div>
      {/* Column footer */}
      {/* <button
        className='flex gap-2 items-center border-gray-300 border rounded-md p-4
                    hover:text-primary-red hover:border-primary-red active:bg-secondary-red active:text-white'
        onClick={() => {
          createApplication(column.id);
        }}
      >
        <PlusCircleOutlined className='text-xl' />
        <p>Mới</p>
      </button> */}
    </div>
  );
};

export default ColumnContainer;
