import { Routes, Route } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/Home/About/About";
import Contact from "./pages/Home/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login/Login";
import News from "./pages/Home/News/News";
import NotFound from "./pages/Home/NotFound/NotFound";
import Room from "./pages/Home/Room/Room";
import Rooms from "./pages/Home/Rooms/Rooms";
import DashRooms from "./pages/Dashboard/Rooms/Rooms";
import DashNews from "./pages/Dashboard/News/News";
import DashReservations from "./pages/Dashboard/Reservations/Reservations";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms/:id" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<Aside />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/dashboard/rooms" element={<DashRooms />} />
          <Route
            path="/dashboard/reservations"
            element={<DashReservations />}
          />
          <Route path="/dashboard/news" element={<DashNews />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
