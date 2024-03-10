import React, { useEffect, useState } from "react";
import "./Section1.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShops } from "../../redux/slice/shopSlice";



const Section1 = ({t}) => {
  const {products, Loading, err} = useSelector((state)=>state.shops)

  const dispatch=useDispatch()

  console.log(products);
  useEffect(()=>{
      dispatch(getShops())
  },[])
  console.log(products);

  return (
    <div>
      <div className="Container">
        <h1>{t("Новая коллекция")}</h1>
        <div className="look-container">
          {products.map((el) => (
            <NavLink className="NavLink" to={`/detail/${el.id}`} key={el.id}>
              <div className="look" key={el.id}>
                <div>
                  <img src={el.img} alt={el.name} />
                  <h1>{el.name}</h1>
                  <p>{el.price}$</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        <p id="btn-btn">
          <NavLink className="NavLink" to="/shop">
            <button>{t("Открыть магазин")}</button>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Section1;
