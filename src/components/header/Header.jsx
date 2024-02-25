import React, { useState } from "react";
import "./Header.css";
import logotip from "../../assets/logotip.png";
import Phone from "../../assets/Phone.png";
import basket from "../../assets/shopping-bags 1.png";
import { NavLink } from "react-router-dom";

const Header = ({cartItems, t , ChangeLng, active}) => {
  
  return (
    <div>
      <div className="Container">
        <div className="main">
          <NavLink className="NavLink" to="/">
            <div className="logotip">
              <img src={logotip} alt="" />
              <p>Womazing</p>
            </div>
          </NavLink>

          <div className="category">
            <span>
              <NavLink className="NavLinkspan" to="/">
                {t("Главная")}
              </NavLink>
            </span>
            <p>
              <NavLink className="NavLink" to="/shop">
                {t("Магазин")}
                
              </NavLink>
            </p>
            <p>
              <NavLink className="NavLink" to="/about">
                {t("О бренде")}
                
              </NavLink>
            </p>
            <p>
              <NavLink className="NavLink" to="/contacts">
              {t("Контакты")}
                
              </NavLink>
            </p>
          </div>

          <div className="basket">
            <div className="Phone">
              <img src={Phone} alt="" />
              <a href="">+7 (495) 823-54-12</a>
            </div>

            <div className="basket-in">
               <NavLink to='/cart'>
              <span>{cartItems}</span>
              <img src={basket} alt="" />
              
               </NavLink>
               <div className="btn-lang">

               <button className={active==="ru" ? "active":""} onClick={(e)=>ChangeLng(e.target.innerText)}>RU</button>
               <button className={active==="kg" ? "active":""} onClick={(e)=>ChangeLng(e.target.innerText)}>KG</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
