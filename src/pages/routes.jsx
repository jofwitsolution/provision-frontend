import { createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import NotFound from "../components/NotFound";

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
    path: "*",
    element: <Home />,
  },
]);

export default router;
