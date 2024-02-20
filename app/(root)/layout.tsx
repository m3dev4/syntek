import MobileNav from "@/components/shared/mobile";
import Sidebar from "@/components/shared/sidebar";
import { ThemeProvider } from "@/components/provider/themeProvider";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
   
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">
        {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
            {children}
            {/* </ThemeProvider> */}
            </div>
      </div>
    </main>
    
  );
};

export default Layout;
