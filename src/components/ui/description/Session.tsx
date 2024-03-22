const DetailSession = ({
  children,
  hideBottomLine = false,
}: {
  children: React.ReactNode;
  hideBottomLine?: boolean;
}) => {
  return (
    <div className='px-4 py-2'>
      <div>{children}</div>
      {!hideBottomLine && <div className='mt-4 border-b-2 border-gray-200'></div>}
    </div>
  );
};

const DetailHeader = ({ title }: { title: string }) => {
  return <div className='text-base font-bold mb-2'>{title}</div>;
};

export default DetailSession;
export { DetailHeader };
