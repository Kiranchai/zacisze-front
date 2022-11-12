import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/Home/About/About";
import Contact from "./pages/Home/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login/Login";
import News from "./pages/Home/News/News";
import NotFound from "./pages/Home/NotFound/NotFound";
import Room from "./pages/Home/Room/Room";
import Rooms from "./pages/Home/Rooms/Rooms";

const LandingRouts = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="rooms/:id" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default LandingRouts;
