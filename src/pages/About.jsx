import React from "react";
import AbouImg1 from "../assets/Frame 34.png";
import AboutImg2 from "../assets/Frame 34 (1).png";
import { NavLink } from "react-router-dom";

const About = ({t, back}) => {
  return (
    <div className="Container">
      <button className="back-btn" onClick={back}><img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="back" /></button>
      <h1 id="About-h1">{t("О бренде")}</h1>

      <div className="About-1">
        <div className="About-img">
          <img src={AbouImg1} alt="" />
        </div>
        <div className="About-text">
          <h3>{t("Идея и женщина")}</h3>
          <li>
          {t("Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.")}

          </li>
          <li>
          {t("Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.")}
            
          </li>
        </div>
      </div>

      <div className="About-1">
        <div className="About-text">
          <h3>{t("Магия в деталях")}</h3>
          <li>{t("Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.")}
           
          </li>
          <li>
          {t("Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.")}

          </li>
        </div>
        <div className="About-img">
          <img src={AboutImg2} alt="" />
        </div>
      </div>
      <NavLink to={'/shop'}>

      <p className="About-Btn"><button>{t("Перейти в магазин")}</button></p>
      </NavLink>
    </div>
  );
};

export default About;
