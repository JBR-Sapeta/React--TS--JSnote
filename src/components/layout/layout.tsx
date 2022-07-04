import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import "./layout.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
