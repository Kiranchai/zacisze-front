import { Navigate, Route, Routes } from "react-router-dom";
import Rooms from "./pages/Dashboard/Rooms/Rooms";
import News from "./pages/Dashboard/News/News";
import Reservations from "./pages/Dashboard/Reservations/Reservations";
import Dashboard from "./pages/Dashboard/Dashboard";
import Aside from "./components/Aside/Aside";

const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Aside />}>
          <Route index element={<Dashboard />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="news" element={<News />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </>
  );
};

export default DashboardRoutes;
