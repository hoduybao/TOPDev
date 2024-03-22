import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Rate, Dropdown } from 'antd';
import type { MenuProps } from 'antd';

import { MoreOutlined } from '@ant-design/icons';

import { Id, KanbanApplicationType } from '@/+core/utilities/types/recruitment.type';

interface PropType {
  application: KanbanApplicationType;
  deleteApplication: (id: Id) => void;
}

const ApplicationCard = (props: PropType) => {
  const { application, deleteApplication } = props;

  const cardItems: MenuProps['items'] = [
    {
      key: 'detail',
      label: (
        <Link to={`/recruitment/process/${application.jobId}/${application?.id}`}>
          Xem chi tiết
        </Link>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: 'delete',
      label: 'Xóa',
    },
  ];

  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [rateValue, setRateValue] = useState<number>(application.rating ? application.rating : 0);
  const [showOption, setShowOption] = useState<boolean>(false);

  const handleClickEvent = (event: any) => {
    if (event.target instanceof SVGElement) {
      console.log('Click choose btn');
      setShowOption(true);
    } else {
      setShowOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickEvent, true);
    return () => {
      document.removeEventListener('click', handleClickEvent, true);
    };
  }, []);

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: application.id,
    data: {
      type: 'Application',
      rating: rateValue,
      application,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleViewDetailApplication = () => {
    console.log(application);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className='opacity-30 bg-gray-300 p-2.5 h-[100px] min-h-[100px] items-center
                  flex text-left rounded-xl border-2 border-primary-red cursor-grab relative'
      />
    );
  }

  const handleChooseOption = (e: any) => {
    if (e?.key === 'delete') {
      deleteApplication(application?.id);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleViewDetailApplication}
      className='relative bg-white border-2 border-gray-300 p-2.5 h-[120px] min-h-[120px] items-center
                  flex text-left rounded-md hover:border-primary-red cursor-grab'
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <div className='flex flex-col gap-3'>
        <p className='max-w-[230px] truncate font-semibold'>{application.jobId}</p>
        <p className='max-w-[230px] truncate'>{application.name}</p>
        <Rate
          value={rateValue}
          onChange={(value: number) => {
            setRateValue(value);
          }}
        />
      </div>

      {mouseIsOver && (
        <div className='absolute right-2 top-2 p-2 rounded opacity-60 hover:opacity-100 hover:cursor-pointer'>
          <Dropdown
            open={showOption}
            menu={{
              items: cardItems,
              onClick: handleChooseOption,
            }}
          >
            <MoreOutlined className='text-xl font-bold' />
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default ApplicationCard;
