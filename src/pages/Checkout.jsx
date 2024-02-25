import React from "react";
import Check from "../assets/Чек-бокс.png";
import { NavLink } from "react-router-dom";

const Checkout = ({t, back}) => {
  return (
    <div>
      <div className="Container">
      <button className="back-btn" onClick={back}><img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="back" /></button>
        <h1 className="Checkout-h1">{t("Оформление заказа")}</h1>
        <div className="Checkout">
          <div className="Checkout-in-1">
            <div className="Checkout-input">
              <h2>{t("Данные покупателя")}</h2>
              <input type="text" placeholder={t("Имя")} />
              <br />
              <input type="email" placeholder="E-mail" />
              <br />
              <input type="text" placeholder="Телефон" />
            </div>

            <div className="Checkout-input-2">
              <h2>{t("Адрес получателя")}</h2>
              <input type="text" placeholder={t("Страна")} />
              <br />
              <input type="text" placeholder={t("Город")} />
              <br />
              <input type="text" placeholder={t("Улица")} />
              <br />
              <input type="text" placeholder={t("Дом")} />
              <br />
              <input type="text" placeholder={t("Квартира")} />
            </div>

            <div className="Checkout-Comment">
              <h2>{t("Комментарии")}</h2>
              <textarea placeholder={t("Страна")}></textarea>
            </div>
          </div>
          <div className="Checkout-order">
            <div className="Checkout-order-in">
              <div className="Checkout-order-in-1">
                <h3 className="Checkout-order-in-h3">{t("Товар")}</h3>
                <h3>{t("Футболка USA")}</h3>
                <h3>{t("Подытог")}</h3>
              </div>
              <div className="Checkout-order-in-2">
                <h3 className="Checkout-order-in-h3">{t("Всего")}</h3>
                <h3>$129</h3>

                <h3>$129</h3>
              </div>
            </div>

            <div className="Checkout-Frame">
              <h2>{t("Итого")}</h2>
              <h2>$129</h2>
            </div>

            <div className="Checkout-order-2">
              <h2>{t("Способы оплаты")}</h2>
              <p>
                <img src={Check} alt="" />
                {t("Оплата наличными")}
               
              </p>
              <NavLink to="/success">
                <button>{t("Разместить заказ")}</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
