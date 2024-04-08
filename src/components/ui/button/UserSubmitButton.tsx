const UserSubmitButton = ({
  name,
  isFilled = false,
  isFullWidth = true,
  onClick,
  isSmall = false,
  customClass,
}: {
  name: string;
  isFilled?: boolean;
  isFullWidth?: boolean;
  isSmall?: boolean;
  onClick?: (values?: any) => void;
  htmlType?: string;
  customClass?: string;
}) => {
  return (
    <div className={`${isFullWidth && 'w-full'} mb-2`}>
      <button
        onClick={onClick}
        className={`
        ${isFilled ? 'bg-orange-600 text-white-900' : 'text-orange-600 border border-orange-600'}
        ${isSmall ? 'p-2' : 'p-4'}
        w-full text-base font-bold rounded
        ${customClass}
        `}
      >
        {name}
      </button>
    </div>
  );
};

export default UserSubmitButton;
