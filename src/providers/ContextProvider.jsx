import { createContext, useEffect, useState } from "react";
import authService from "../services/authService";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const [sliderNotification, setSliderNotification] = useState({
    isActive: false,
    text: "",
  });
  const [showGetStarted, setGetStarted] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  useEffect(() => {
    const data = authService.getCurrentUser();
    setCurrentUser(data);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        currentUser,
        toggleSidebar,
        setToggleSidebar,
        toggleMobileMenu,
        setToggleMobileMenu,
        showGetStarted,
        setGetStarted,
        sliderNotification,
        setSliderNotification,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
