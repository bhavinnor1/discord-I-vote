// Index.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Public from "./Public";
import Private from "./Private";

function Index() {
  localStorage.setItem('token', "123456789")
  const login = localStorage.getItem("token");

  return (
    <>
      <Routes>
        {/* {login && <Route path="*" element={<Private />} />} */}
        <Route path="*" element={<Public />} />
      </Routes>
    </>
  );
}

export default Index;
