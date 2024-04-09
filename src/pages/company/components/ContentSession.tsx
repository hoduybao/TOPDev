type ContentSesstionProps = {
  header: string;
  content: string;
};

const ContentSession = ({ header, content }: ContentSesstionProps) => {
  return (
    <div className='mb-2'>
      <h1 className='font-bold capitalize text-base'>{header}</h1>
      <div
        className='text-gray-900 text-base mt-2'
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default ContentSession;
