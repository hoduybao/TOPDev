import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className='max-w-[37.5rem] lg:max-w-[62rem] xl:max-w-[80rem] m-auto'>{children}</div>;
};

export default Container;
