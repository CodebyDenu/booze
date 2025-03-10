import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import "./globals.css";

import AppContextProvider from "@/context/AppContext";
export const metadata = {
  title: "WellFood - Resturent React NextJS Template",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
   
      <html lang="en">
           <AppContextProvider>
                <body>{children}</body>
           </AppContextProvider>
    
      </html>
    
  );
}
