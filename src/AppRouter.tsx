import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import Room from "./pages/Room/Room";
import Rooms from "./pages/Rooms/Rooms";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App Children={Home} />} />
        <Route path="/about" element={<App Children={About} />} />
        <Route path="/news" element={<App Children={News} />} />
        <Route path="/rooms" element={<App Children={Rooms} />} />
        <Route path="/contact" element={<App Children={Contact} />} />
        <Route path="/login" element={<App Children={Login} />} />
        <Route path="/rooms/:id" element={<App Children={Room} />} />
        <Route path="*" element={<App Children={NotFound} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default AppRouter;
