import React from "react";
import "./App.css";
import Header from "./components/header/Header";
// import Section1 from './components/section1/Section1'
// import Section2 from './components/section2/Section2'
// import Section3 from './components/section3/Section3'
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/detail/:ProducId" element={<Detail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
