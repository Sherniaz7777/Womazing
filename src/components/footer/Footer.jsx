import React from 'react'
import "./Footer.css"
import logotip from "../../assets/logotip.png";
import instagram from "../../assets/instagram (1) 1.png";
import facebook from "../../assets/facebook (1) 1.png";
import Twiter from "../../assets/Group.png";
import visa from "../../assets/visa-mastercard 1.png";

const Footer = () => {
  return (
    
    <footer>
        <div className="main-1">
          <div className="logos">

          <div className="logotip-2">
              <img src={logotip} alt="" />
              <p>Womazing</p>
          </div>
          <div className="categoryss">
             <span>Главная</span>
             <p>Магазин</p>
             <p>О бренде</p>
             <p>Контакты</p>
          </div>
          <div className="phonenomer">
              <p>+7 (495) 823-54-12</p>
              <h5>hello@womazing.com</h5>
          </div>

          </div>
          <div className="logos-2">

          <div className='sylka'>
              <li>© Все права защищены</li>
              <li>Политика конфиденциальности</li>
              <li>Публичная оферта</li>
          </div>

          <div className='Frame-22'>
              <li>Пальто</li>
              <li>Свитшоты</li>
              <li>Кардиганы</li>
              <li>Толстовки</li>
          </div>

          <div className='social-network'>
              <div className="insta">
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={Twiter} alt="" />
              </div>
              <div className="mastercard">
                <img src={visa} alt="" />
              </div>
          </div>

          </div>
        </div>
    </footer>
  )
}

export default Footer