import React from 'react'
import Group from "../assets/Group (1).png";
import { NavLink } from 'react-router-dom';

const Success = ({t,back}) => {
  return (
    <div>
        <div className="Container">
        <button className="back-btn" onClick={back}><img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="back" /></button>
            <h1  className="Shop-h1">{t("Заказ получен")}</h1>
            <div className="Main-content">
                <div className="Main-content-img">
                    <img src={Group} alt="" />
                    <div className="Main-content-text">
                        <h3>{t("Заказ успешно оформлен")}</h3>
                        <p>{t("Мы свяжемся с вами в ближайшее время!")}</p>
                    </div>
                </div>
                <div className="Main-content-btn">
                    <NavLink to='/'>
                    <button>{t("Перейти на главную")}</button>
                    </NavLink>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Success