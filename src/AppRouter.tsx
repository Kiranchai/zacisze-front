import { Routes, Route } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import LandingRoutes from "./LandingRoutes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LandingRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
