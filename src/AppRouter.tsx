import { Routes, Route } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import LandingRouts from "./LandingRouts";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LandingRouts />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
