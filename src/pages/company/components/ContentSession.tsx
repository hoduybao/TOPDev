type ContentSesstionProps = {
  header: string;
  content?: string;
  children?: React.ReactNode;
};

const ContentSession = ({ header, content, children }: ContentSesstionProps) => {
  return (
    <div className='mb-2'>
      <h1 className='font-bold capitalize text-base mb-2'>{header}</h1>
      {content ? (
        <div
          className='text-gray-900 text-base'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      ) : (
        ''
      )}
      {children ? <div>{children}</div> : null}
    </div>
  );
};

export default ContentSession;
