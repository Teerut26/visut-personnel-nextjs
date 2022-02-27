import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./../components/Footer";

export default function WithNavbar({ children, navlists }) {
  return (
    <div>
      <Navbar navlists={navlists} />
      {children}
      <Footer />
    </div>
  );
}
