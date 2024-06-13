import { Button } from 'antd';

const UserSubmitButton = ({
  name,
  isFilled = false,
  isFullWidth = true,
  onClick,
  isSmall = false,
  customClass,
  isLoad = false,
}: {
  name: string;
  isFilled?: boolean;
  isFullWidth?: boolean;
  isSmall?: boolean;
  onClick?: (values?: any) => void;
  htmlType?: string;
  customClass?: string;
  isLoad?: boolean;
}) => {
  return (
    <div className={`${isFullWidth && 'w-full'} mb-2`}>
      <Button
        loading={isLoad}
        onClick={onClick}
        className={`
        ${isFilled ? 'bg-orange-600 text-white-900' : 'text-orange-600 border border-orange-600'}
        ${isSmall ? 'px-2' : 'px-4'}
        w-full text-base font-bold rounded !h-12
        ${customClass}
        `}
      >
        {name}
      </Button>
    </div>
  );
};

export default UserSubmitButton;
