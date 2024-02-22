import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import NavigationBar from "./components/same/navbar/NavigationBar.tsx";
import useViewPortWidth from "./hooks/useViewPortWidth.tsx";
import FallbackPh from "./components/same/headers/FallbackPh.tsx";
import Footer from "./components/same/footer/Footer.tsx";
import PageLoading from "./components/same/loading/PageLoading.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const Wishlist = lazy(() => import("./pages/Wishlist.tsx"));
const Promos = lazy(() => import("./pages/Promos.tsx"));
const Menu = lazy(() => import("./pages/Menu.tsx"));
const Reservation = lazy(() => import("./pages/Reservation.tsx"));
const NotFound404 = lazy(() => import("./pages/NotFound404.tsx"));

const PhoneHeader = lazy(
  () => import("./components/same/headers/PhoneHeader.tsx")
);

function App() {
  // Check for viewport changes
  const { vw } = useViewPortWidth();

  return (
    <BrowserRouter>
      {vw < 900 ? (
        <Suspense fallback={<FallbackPh />}>
          <PhoneHeader />
        </Suspense>
      ) : (
        ""
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
