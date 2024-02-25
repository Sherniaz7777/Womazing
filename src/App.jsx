import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n/i18n"
import i18next from "./i18n/i18n";

import Checkout from "./pages/Checkout";
import Success from "./pages/Success";




const App = () => {
  const {t, i18n} = useTranslation()
  const [cartItems, setCartItems] = useState([]);
  const [active, setActive]=useState("ru")
  const navigate = useNavigate()

  const back = ()=>{
    navigate(-1)
  }

  function ChangeLng(Lange) {
     const Langes=Lange.toLowerCase()
     i18n.changeLanguage(Langes)
     setActive(Langes)
  }

  const addToCart = (product) => {
    const existingCard = cartItems.find((card) => card.id === product.id);

    if (!existingCard) {
      setCartItems([...cartItems, product]);
    }
  };

  const deleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  

  return (
    <div>
      <Header cartItems={cartItems.length} t={t} ChangeLng={ChangeLng} active={active}/>
      <Routes>
        <Route path="/" element={<Home t={t}/>} />
        <Route path="/shop" element={<Shop t={t} back={back}/>}></Route>
        <Route path="/about" element={<About t={t} back={back}/>} />
        <Route path="/contacts" element={<Contacts t={t} back={back}/>}></Route>
        <Route path="/cart" element={<Cart CardBasket={cartItems} deleteItem={deleteItem}setCartItems={setCartItems} t={t} back={back}/>}></Route>
        <Route path="/detail/:ProducId" element={<Detail addToCart={addToCart} t={t} back={back}/>}></Route>
        <Route path="/checkout" element={<Checkout t={t} back={back}/>}></Route>
        <Route path="/success" element={<Success t={t} back={back}/>}/>
      </Routes>
      <Footer t={t}/>
    </div>
  );
};

export default App;

