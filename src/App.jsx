import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SliderNotification from "./components/SliderNotification";
import { RouterProvider } from "react-router-dom";
import router from "./pages/routes";

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" />
      <RouterProvider router={router} />
      <SliderNotification />
    </>
  );
}

export default App;
