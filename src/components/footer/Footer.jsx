import React from "react";
import "./Footer.css";
import logotip from "../../assets/logotip.png";
import instagram from "../../assets/instagram (1) 1.png";
import facebook from "../../assets/facebook (1) 1.png";
import Twiter from "../../assets/Group.png";
import visa from "../../assets/visa-mastercard 1.png";

const Footer = ({t}) => {
  return (
    <footer>
      <div className="Container">
        <div className="main-1">
          <div className="logos">
            <div className="logotip-2">
              <img src={logotip} alt="" />
              <p>Womazing</p>
            </div>
            <div className="categoryss">
              <span>{t("Главная")}</span>
              <p>{t("Магазин")}</p>
              <p>{t("О бренде")}</p>
              <p>Контакты</p>
            </div>
            <div className="phonenomer">
              <p>+7 (495) 823-54-12</p>
              <h5>hello@womazing.com</h5>
            </div>
          </div>
          <div className="logos-2">
            <div className="sylka">
              <li>{t("© Все права защищены")}</li>
              <li>{t("Политика конфиденциальности")}</li>
              <li>{t("Публичная оферта")}</li>
            </div>

            <div className="Frame-22">
              <li>{t("Пальто")}</li>
              <li>{t("Свитшоты")}</li>
              <li>{t("Кардиганы")}</li>
              <li>{t("Толстовки")}</li>
            </div>

            <div className="social-network">
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
      </div>
    </footer>
  );
};

export default Footer;
