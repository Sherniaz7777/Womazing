import React from "react";
import vector from "../../assets/Vector 1.png";
import photoglav from "../../assets/Фото главное.png";
import photovtor from "../../assets/Фото вторичное.png";
import phototre from "../../assets/Фото третьестепенное.png";
import "./Hero.css"

const Hero = () => {
  return (
    <div>
      <div>
        <div className="Container">
          <div className="header">
            <div className="header-anket">
              <h1>Новые поступления в этом сезоне</h1>
              <p>
                Утонченные сочетания и бархатные оттенки - вот то, что вы искали
                в этом сезоне. Время исследовать.
              </p>
              <div className="btns">
                <button id="img-btn">
                  <img src={vector} alt="" />
                </button>
                <button id="ot-btn">Открыть магазин</button>
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
