import { useState } from "react";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./routes";
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/custom.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Index/>} />
          {/* <Route path="/blog/*" element={<BlogApp />} />
          <Route path="/users/*" element={<UserApp />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
