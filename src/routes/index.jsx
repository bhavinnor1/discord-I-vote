import React from "react";
import { Route, Routes } from "react-router-dom";
import Public from "./Public";
import Private from "./Private";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Index() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Public />}></Route>
        <Route path="/private" element={<Private />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default Index;
