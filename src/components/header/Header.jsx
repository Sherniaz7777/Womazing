import React from "react";
import "./Header.css";
import logotip from "../../assets/logotip.png";
import Phone from "../../assets/Phone.png";
import basket from "../../assets/shopping-bags 1.png";
import { NavLink } from "react-router-dom";

const Header = () => {
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
                Главная
              </NavLink>
            </span>
            <p>
              <NavLink className="NavLink" to="/shop">
                Магазин
              </NavLink>
            </p>
            <p>
              <NavLink className="NavLink" to="/about">
                О бренде
              </NavLink>
            </p>
            <p>
              <NavLink className="NavLink" to="/contacts">
                Контакты
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

              <img src={basket} alt="" />
               </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
