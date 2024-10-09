import { ReactNode } from "react";

import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const Layout = ({ children, showSidebar = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex">
      {showSidebar && <Sidebar />}
      <main className={`flex-grow ${showSidebar ? "ml-10" : ""}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
