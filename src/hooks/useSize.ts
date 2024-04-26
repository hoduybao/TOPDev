import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

const useSize = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);

  const windowSizeHandler = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener('resize', windowSizeHandler);

    return () => {
      window.removeEventListener('resize', windowSizeHandler);
    };
  }, []);

  useEffect(() => {
    if (isMobile) setWindowSize([638, 390]);
    if (!isMobile) setWindowSize([1368, 768]);
  }, []);

  return windowSize;
};

export default useSize;
