import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/same/loading/Loading";
import NavigationBar from "./components/same/navbar/NavigationBar";
import PhoneHeader from "./components/same/headers/PhoneHeader";
import useViewPortWidth from "./hooks/useViewPortWidth";

const Home = lazy(() => import("./pages/Home"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Promos = lazy(() => import("./pages/Promos"));
const Menu = lazy(() => import("./pages/Menu"));
const Reservation = lazy(() => import("./pages/Reservation"));
const NotFound404 = lazy(() => import("./pages/NotFound404"));

function App() {
  // Check for viewport changes
  const { vw } = useViewPortWidth();

  return (
    <BrowserRouter>
      {vw < 900 ? <PhoneHeader /> : ""}
      <NavigationBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
