import React from "react";
import Deletee from "../assets/Vector 3.png";
import { NavLink } from "react-router-dom";

const Cart = ({ CardBasket, deleteItem, setCartItems , t, back}) => {
  const calculateTotalPrice = () => {
    // Using reduce to sum up the prices of all items
    const totalPrice = CardBasket.reduce(
      (total, item) => total + parseInt(item.price * item.quantity),
      0
    );

    return totalPrice;
  };

  const increaseQuantity = (itemId) => {
    const updatedCartItems = CardBasket.map((item) =>
      item.id === itemId
        ? { ...item, quantity: parseInt(item.quantity) + 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = CardBasket.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="Container">
      <button className="back-btn" onClick={back}><img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="back" /></button>
      <h1 className="Shop-h1">{t("Корзина")}</h1>

      <div className="shop-main">
        <div className="tovar">
          <p>{t("Товар")}</p>
        </div>
        <div className="tovar-price">
          <p>{t("Цена")}</p>
          <p>{t("Количество")}</p>
          <p>{t("Всего")}</p>
        </div>
      </div>
      <hr />
      {CardBasket.map((el) => (
        <div className="shop-basket" key={el.id}>
          <div className="basket-title">
            <button id="cart-btn" onClick={() => deleteItem(el.id)}>
              <img src={Deletee} alt="" />
            </button>
            <img src={el.img} alt="" />

            <h4>{el.name}</h4>
          </div>
          <button id="cart-btn-counter" onClick={() => decreaseQuantity(el.id)}>
            -
          </button>
          <p>{el.quantity}</p>
          <button id="cart-btn-counter" onClick={() => increaseQuantity(el.id)}>
            +
          </button>
          <span>{el.price * el.quantity}$</span>
        </div>
      ))}

      <div className="control-btn">
        <div className="control-btn-1">
          <input type="text" placeholder={t("Введите купон")} />
          <button>{t("Применить купон")}</button>
        </div>
        <div className="control-btn-2">
          <button>{t("Обновить корзину")}</button>
        </div>
      </div>

      <div className="Total-cart">
        <p>
          {t("Подытог")}: <span> {calculateTotalPrice()}$</span>
        </p>
        <div className="Total-cardss">
          <div className="total-basket">
            <h3>{t("Итого")}:</h3>

            <h3>{calculateTotalPrice()}$</h3>
          </div>
            <NavLink to={'/checkout'}>

            
          <button id="total-basket-btn">{t("Оформить заказ")}</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
