import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {  getShops } from "../redux/slice/shopSlice";


const Shop = ({t, back}) => {

  const {products, Loading, err} = useSelector((state)=>state.shops)

  const dispatch=useDispatch()

  console.log(products);
  useEffect(()=>{
      dispatch(getShops())
  },[])

  return (
    <div className="Container">
      <button className="back-btn" onClick={back}><img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="back" /></button>
      <h1 className="Shop-h1">{t("Магазин")}</h1>

      <div className="Shop-Btn">
        <button>{t("Все")}</button>
        <button>{t("Пальто")}</button>
        <button>{t("Свитшоты")}</button>
        <button>{t("Кардиганы")}</button>
        <button>{t("Толстовки")}</button>
      </div>

      <div className="Shop-cards">
        {products.map((el) => (
          <NavLink className="NavLink" to={`/detail/${el.id}`} key={el.id}>
            <div className="shop-cards-in">
              <img src={el.img} alt="" />
              <h3>{el.name}</h3>
              <p>{el.price}$</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Shop;
