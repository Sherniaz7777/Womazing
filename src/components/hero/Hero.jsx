import React from "react";
import vector from "../../assets/Vector 1.png";
import photoglav from "../../assets/Фото главное.png";
import photovtor from "../../assets/Фото вторичное.png";
import phototre from "../../assets/Фото третьестепенное.png";
import "./Hero.css";
import { NavLink } from "react-router-dom";

const Hero = ({t}) => {
  return (
    <div>
      <div>
        <div className="Container">
          <div className="header">
            <div className="header-anket">
              
              <h1>{t("Новые поступления в этом сезоне")}</h1>
              <p>{t("Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.")}
                
              </p>
              <div className="btns">
                <button id="img-btn">
                  <img src={vector} alt="" />
                </button>
                <NavLink className="NavLink" to="/shop">
                  <button id="ot-btn">{t("Открыть магазин")}</button>
                </NavLink>
              </div>

              <div className="header-anket-h6">
                <h5 id="h6-3"></h5>
                <h6 id="h6-1"></h6>
                <h4 id="h6-3"></h4>
              </div>
            </div>

            <div className="header-img">
              <img id="phototre" src={phototre} alt="" />
              <img src={photoglav} alt="" />
              <img id="photovtor" src={photovtor} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
