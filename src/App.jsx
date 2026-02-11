import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import WhatsAppButton from "./components/whatsAppButton/whatsAppButton";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton/scrollToTopButton";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  useEffect(() => {
    if (window.themeColors && typeof window.themeColors === "object") {
      Object.entries(window.themeColors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key.replace("_", "-")}-color`, value);
      });
    }
  }, []);
  
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
      <ToastContainer />
    </>
  );
}

export default App;
