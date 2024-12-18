import React from "react";
import Header from "./component/Header/Header";
import Home from "./component/pages/Home/Home";

import Footer from "./component/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./component/pages/About/About";



const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;