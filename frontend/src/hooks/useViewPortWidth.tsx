import { useEffect, useState } from 'react';

const useViewPortWidth = () => {
  const [vw, setVw] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setVw(window.innerWidth);

    window.addEventListener('resize', handleResize);
  }, []);

  return { vw };
};

export default useViewPortWidth;
