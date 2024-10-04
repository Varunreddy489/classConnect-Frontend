import { ReactNode } from "react";

import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className=" mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
