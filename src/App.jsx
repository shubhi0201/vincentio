import React from "react";
import Header from "./component/Header/Header";
import Home from "./component/pages/Home/Home";
import Contact from "./component/pages/Contact/Contact";
import Footer from "./component/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./component/pages/About/About";
import Gpupricing from "./component/pages/Gpupricing/Gpupricing";



const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path = "/Contact" element={<Contact/>}/>
        <Route path="/Gpupricing" element={<Gpupricing/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;