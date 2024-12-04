"use client";
import { wellfoodUtility } from "@/utility";
import { useEffect } from "react";
import niceSelect from "react-nice-select";
import Footer from "./Footer";
import Header from "./Header";
import AppContextProvider from "@/context/AppContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const WellFoodLayout = ({ children, bgBlack }) => {
  useEffect(() => {
    niceSelect();
    wellfoodUtility.animation();
    console.log(bgBlack);
    if (bgBlack) {
      document.querySelector(".page-wrapper").classList.add("bg-black");
    } else {
      if (
        document.querySelector(".page-wrapper").classList.contains("bg-black")
      ) {
        document.querySelector(".page-wrapper").classList.remove("bg-black");
      }
    }
  }, []);

  return (
    // <AppContextProvider>
    <div className="page-wrapper">
      <Header />
      <ToastContainer />
      {children}
      <Footer />
    </div>
    // </AppContextProvider>
  );
};
export default WellFoodLayout;
