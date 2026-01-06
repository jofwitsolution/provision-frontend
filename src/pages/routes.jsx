import { createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Referrals from "./referrals/Referrals";
import Accommodation from "./accommodation/Accommodation";
import Support from "./support/Support";
import Community from "./communities/Community";
import TermsConditions from "./terms-conditions/TermsConditions";
import PrivacyPolicy from "./privacy-policy/PrivacyPolicy";
import FaqsPage from "./faqs/FaqsPage";
import EventsPage from "./events/EventsPage";

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
    path: "/accommodation",
    element: <Accommodation />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/communities",
    element: <Community />,
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
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsConditions />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/faqs",
    element: <FaqsPage />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export default router;
