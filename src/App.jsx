import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetStarted from "./components/GetStarted";
import SliderNotification from "./components/SliderNotification";
import Sidebar from "./components/navigation/Sidebar";
import { RouterProvider } from "react-router-dom";
import router from "./pages/routes";

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" />
      <RouterProvider router={router} />
      <GetStarted />
      <SliderNotification />
    </>
  );
}

export default App;
