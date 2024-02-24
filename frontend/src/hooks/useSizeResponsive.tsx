import { useEffect, useState } from 'react';
import useViewPortWidth from './useViewPortWidth';

const useSizeResponsive = (navFooter: boolean) => {
  const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg'>('xs');
  const { vw } = useViewPortWidth();

  useEffect(() => {
    if (vw < 900) setSize('md');
    if (vw > 899) setSize(navFooter ? 'xs' : 'sm'); // && vw < 1536
  }, [vw, navFooter]);

  return { size };
};

export default useSizeResponsive;
