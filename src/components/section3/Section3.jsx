import React from "react";
import "./Section3.css";
import adam from "../../assets/winger.png";
import right from "../../assets/Vector 2.png";
import left from "../../assets/Vector 1 (2).png";
import { NavLink } from "react-router-dom";

const Section3 = ({t}) => {
  return (
    <div>
      <div className="Container">
        <h1>{t("Команда мечты Womazing")}</h1>

        <div className="Frame">
          <button id="btn-1">
            <img src={left} alt="" />
          </button>
          <img id="imgs" src={adam} alt="" />
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <button>
            <img src={right} alt="" />
          </button>

          <div className="Frame-text">
            <h2>{t("Для каждой")}</h2>

            <p className="Frame-text-in">
            {t("Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.")}
              
            </p>

            <p className="Frame-text-in-2">
            {t("Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.")}
              
            </p>

            <NavLink className="NavLinkspan" to='/about'><span>{t("Подробнее о бренде")}</span></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
