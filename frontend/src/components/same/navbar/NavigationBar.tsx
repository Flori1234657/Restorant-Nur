import { lazy, Suspense } from 'react';
import useViewPortWidth from '@/hooks/useViewPortWidth';

const PcNav = lazy(() => import('./components/PcNav'));
const PhoneNav = lazy(() => import('./components/PhoneNav'));

function NavigationBar() {
  // Check for viewport changes
  const { vw } = useViewPortWidth();

  return <Suspense fallback="">{vw < 900 ? <PhoneNav /> : <PcNav />}</Suspense>;
}

export default NavigationBar;
