// Index.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Public from "./Public";
import Private from "./Private";

function Index() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Public />} />
        <Route path="/private" element={<Private />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Index;
