import { useEffect, useState } from 'react';
import useViewPortWidth from './useViewPortWidth';

const useSizeResponsive = (navFooterComponent: boolean) => {
  const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg'>('xs');
  const { vw } = useViewPortWidth();

  useEffect(() => {
    if (vw < 900) setSize('md');
    if (vw > 899) setSize(navFooterComponent ? 'xs' : 'sm'); // && vw < 1536
  }, [vw, navFooterComponent]);

  return { size };
};

export default useSizeResponsive;
