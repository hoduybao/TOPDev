import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

type TipItemProps = {
  action: string;
  description: string;
  url: string;
};
const TipItem = ({ action, description, url }: TipItemProps) => {
  return (
    <div className='my-4'>
      <p className='text-base'>{description}</p>
      <Link to={url} className='underline text-orange-500 font-bold'>
        {action} <ArrowRightOutlined className='text-orange-500' />
      </Link>
    </div>
  );
};

const QuickTips = () => {
  const data: TipItemProps[] = [
    {
      description: 'Quick tips for professional CV of Developers',
      action: 'Help me to explore',
      url: '/',
    },
    {
      description: 'Quick tips for professional CV of Developers',
      action: 'Help me to explore',
      url: '/',
    },
  ];
  return (
    <div>
      {data.map((tipItem, index) => {
        return (
          <>
            <TipItem key={'Tipitem' + index} {...tipItem} />
            {index !== data.length - 1 && <div className='border-b border-gray-300' />}
          </>
        );
      })}
    </div>
  );
};

export default QuickTips;
