import { createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import NotFound from "../components/NotFound";
import Contact from "./contact/Contact";
import Referrals from "./referrals/Referrals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/referrals",
    element: <Referrals />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export default router;
