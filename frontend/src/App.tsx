import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavigationBar from '@/components/same/navbar/NavigationBar';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import Footer from '@/components/same/footer/Footer';
import PageLoading from '@/components/same/loading/PageLoading';

const Home = lazy(() => import('@/pages/Home'));
const Wishlist = lazy(() => import('@/pages/Wishlist'));
const Promos = lazy(() => import('@/pages/Promos'));
const Menu = lazy(() => import('@/pages/Menu'));
const Reservation = lazy(() => import('@/pages/Reservation'));
const NotFound404 = lazy(() => import('@/pages/NotFound404'));
const PhoneHeader = lazy(() => import('@/components/same/headers/PhoneHeader'));

function App() {
  // Check for viewport changes
  const { vw } = useViewPortWidth();

  return (
    <BrowserRouter>
      {vw < 900 ? (
        <Suspense fallback="">
          <PhoneHeader />
        </Suspense>
      ) : (
        ''
      )}
      <NavigationBar />
      <Suspense fallback={<PageLoading />}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
