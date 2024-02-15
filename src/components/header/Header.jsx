import React from 'react'
import "./Header.css"
import logotip from "../../assets/logotip.png";
import Phone from "../../assets/Phone.png";
import basket from "../../assets/shopping-bags 1.png";
import vector from "../../assets/Vector 1.png"
import photoglav from "../../assets/Фото главное.png";
import photovtor from "../../assets/Фото вторичное.png";
import phototre from "../../assets/Фото третьестепенное.png";

const Header = () => {
  return (
    <div>
        <div className="main">

            <div className="logotip">
                <img src={logotip} alt="" />
                <p>Womazing</p>
            </div>

            <div className="category">
                <span>Главная</span>
                <p>Магазин</p>
                <p>О бренде</p>
                <p>Контакты</p>
            </div>

            <div className="basket">
                  <div className="Phone">
                    <img src={Phone} alt="" />
                    <a href="">+7 (495) 823-54-12</a>

                  </div>
                    
                    <div className="basket-in">
                        <img src={basket} alt="" />
                    </div>
            </div>
        </div>

        <div className="header">

            <div className="header-anket">
                <h1>Новые поступления в этом сезоне</h1>
                <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                 <div className="btns">
                    
                <button id='img-btn'><img src={vector} alt="" /></button>
                <button id='ot-btn'>Открыть магазин</button>
                 </div>

                 <div className="header-anket-h6">
                    <h5 id='h6-3'></h5>
                    <h6 id='h6-1'></h6>
                    <h4 id='h6-3'></h4>
                 </div>

            </div>

            <div className="header-img">
                
                <img id='phototre' src={phototre} alt="" />
                <img  src={photoglav} alt="" />
                <img id='photovtor' src={photovtor} alt="" />


            </div>
        </div>
    </div>
  )
}

export default Header