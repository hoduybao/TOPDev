const DetailSession = ({
  children,
  hideBottomLine = false,
  isHeader = false,
}: {
  children: React.ReactNode;
  hideBottomLine?: boolean;
  isHeader?: boolean;
}) => {
  return (
    <div>
      <div className={`${isHeader ? 'px-4 py-4' : 'px-4 py-1'}`}>{children}</div>
      {!hideBottomLine && <div className='border-b-[1px] border-gray-300'></div>}
    </div>
  );
};

const DetailHeader = ({ title }: { title: string }) => {
  return <div className='text-md font-bold mb-2'>{title}</div>;
};

export default DetailSession;
export { DetailHeader };
