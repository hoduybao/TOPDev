import React from 'react';
import useSticky from '../../hooks/sticky';

export function HomePage() {
  const ref = React.useRef(null);
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setIsSticky(ref.current.getBoundingClientRect().top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='relative h-[1000px]'>
      <div
        className={`sticky top-0 bg-red-400 ${isSticky ? 'fixed' : ''}`}
        ref={ref}
        style={{ zIndex: isSticky ? 1 : 'auto' }}
      >
        <h1 className='h-[100px]'>Home Page</h1>
        <h1 className={`h-[100px] ${isSticky && 'hidden'}`}>Home Page description</h1>
      </div>
      <div className={`bg-red-800 h-[200px] ${isSticky ? 'mt-[100px]' : ''}`}></div>
    </div>
  );
}
