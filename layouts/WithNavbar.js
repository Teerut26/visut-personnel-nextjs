import React from "react";
import Navbar from "../components/Navbar";

export default function WithNavbar({ children,navlists }) {
  return (
    <>
      <Navbar navlists={navlists} />
      {children}
    </>
  );
}
