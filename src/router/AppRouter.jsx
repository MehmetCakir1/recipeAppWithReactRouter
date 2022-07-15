import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About"
import { GlobalStyles } from "../globalStyles/GlobalStyles";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Details"

const AppRouter = () => {
  return (
      <BrowserRouter>
      <GlobalStyles/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About/>}/>
          {/* <Route path="details" element={<PrivateRouter/>}> */}
          <Route path="details" element={<Details/>}/>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
  );
};

export default AppRouter;
