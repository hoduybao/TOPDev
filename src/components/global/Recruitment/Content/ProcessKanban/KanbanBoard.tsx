import { createPortal } from 'react-dom';
import { useMemo, useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { v4 as uuidv4 } from 'uuid';

import { PlusCircleOutlined } from '@ant-design/icons';

import ColumnContainer from './ColumnContainer';
import ApplicationCard from './ApplicationCard';

import { KanbanColumn, Id, KanbanApplicationType } from '@/+core/utilities/types/recruitment.type';

const defaultCols: KanbanColumn[] = [
  {
    id: 'new',
    title: 'Mới',
  },
  {
    id: 'expertise',
    title: 'Thẩm định',
  },
  {
    id: 'interview',
    title: 'Phỏng vấn',
  },
  {
    id: 'contract',
    title: 'Đề xuất hợp đồng',
  },
];

interface PropType {
  applications: KanbanApplicationType[];
  setApplications: React.Dispatch<React.SetStateAction<KanbanApplicationType[]>>;
}

const KanbanBoard = (props: PropType) => {
  const { applications, setApplications } = props;

  const [columns, setColumns] = useState<KanbanColumn[]>(defaultCols);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]); // Use for dnd-kit

  const [activeColumn, setActiveColumn] = useState<KanbanColumn | null>(null);
  const [activeApplication, setActiveApplication] = useState<KanbanApplicationType | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
  );

  const createApplication = (columnId: Id) => {
    const newApplication: KanbanApplicationType = {
      id: uuidv4(),
      columnId,
      name: `Applicant ${applications.length + 1}`,
      rating: 1,
    };

    setApplications([...applications, newApplication]);
  };

  //   const updateApplication = (id: Id, content: string) => {
  //     const newApplications = applications.map((a) => {
  //       if (a.id !== id) return a;
  //       return { ...a, content };
  //     });

  //     setApplications(newApplications);
  //   };

  const deleteApplication = (id: Id) => {
    const newApplications = applications.filter((a) => a.id !== id);
    setApplications(newApplications);
  };

  const createNewColumn = () => {
    const columnToAdd: KanbanColumn = {
      id: uuidv4(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  };

  const deleteColumn = (id: Id) => {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);

    const newApplications = applications.filter((a) => a.columnId !== id);
    setApplications(newApplications);
  };

  const updateColumn = (id: Id, title: string) => {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });

    setColumns(newColumns);
  };

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === 'Column') {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === 'Application') {
      setActiveApplication(event.active.data.current.application);
      return;
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    setActiveColumn(null);
    setActiveApplication(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current?.type === 'Column';
    if (!isActiveAColumn) return;

    console.log('DRAG COLUMN END', applications);

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveApplication = active.data.current?.type === 'Application';
    const isOverApplication = over.data.current?.type === 'Application';

    if (!isActiveApplication) return;

    // Dropping a Application over another Application
    if (isActiveApplication && isOverApplication) {
      setApplications((applications) => {
        const activeIndex = applications.findIndex((a) => a.id === activeId);
        const overIndex = applications.findIndex((a) => a.id === overId);

        if (applications[activeIndex].columnId != applications[overIndex].columnId) {
          // Fix introduced after video recording
          applications[activeIndex].columnId = applications[overIndex].columnId;
          return arrayMove(applications, activeIndex, overIndex - 1);
        }

        return arrayMove(applications, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === 'Column';

    // Dropping a Application over a column
    if (isActiveApplication && isOverAColumn) {
      setApplications((applications) => {
        const activeIndex = applications.findIndex((a) => a.id === activeId);

        applications[activeIndex].columnId = overId;
        // console.log('DROPPING APPLICATION OVER COLUMN', { activeIndex });
        return arrayMove(applications, activeIndex, activeIndex);
      });
    }

    console.log('DRAG APPLICATION END', applications);
  };

  return (
    <div className='w-full p-4 h-[calc(100vh-46px-59px)] max-h-[calc(100vh-46px-59px)] overflow-x-auto'>
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className='m-auto flex gap-4'>
          <div className='flex gap-4'>
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer
                  key={col.id}
                  column={col}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  applications={applications.filter(
                    (application) => application.columnId === col.id,
                  )}
                  createApplication={createApplication}
                  deleteApplication={deleteApplication}
                />
              ))}
            </SortableContext>
          </div>
          <button
            onClick={() => {
              createNewColumn();
            }}
            className='h-[60px] w-[350px] min-w-[350px] flex items-center gap-2 bg-primary-red text-[#fff] font-semibold
                        hover:cursor-pointer rounded-md p-4'
          >
            <PlusCircleOutlined className='text-xl' />
            <p>Thêm quy trình</p>
          </button>
        </div>

        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                applications={applications.filter(
                  (application) => application.columnId === activeColumn.id,
                )}
                createApplication={createApplication}
                deleteApplication={deleteApplication}
              />
            )}
            {activeApplication && (
              <ApplicationCard
                application={activeApplication}
                deleteApplication={deleteApplication}
              />
            )}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
