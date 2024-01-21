import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

function Public() {
  const { name, avatar } = useParams();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default Public;
