import React from "react";
import Deletee from "../assets/Vector 3.png";

const Cart = ({ CardBasket }) => {
  console.log(CardBasket);
  return (
    <div className="Container">
      <h1 className="Shop-h1">Корзина</h1>

      <div className="shop-main">
        <div className="tovar">
          <p>Товар</p>
        </div>
        <div className="tovar-price">
          <p>Цена</p>
          <p>Количество</p>
          <p>Всего</p>
        </div>
      </div>
      <hr />
      {CardBasket.map((el) => (
        <div className="shop-basket">
          <div className="basket-title">
            <button id="cart-btn">
              <img src={Deletee} alt="" />
            </button>
            <img
              src={el.img}
              alt=""
            />

            <h4>{el.name}</h4>
          </div>
          <p>$129</p>
          <button id="cart-btn-counter">1</button>
          <span>$129</span>
        </div>
      ))}

      <div className="control-btn">
        <div className="control-btn-1">
          <input type="text" placeholder="Введите купон" />
          <button>Применить купон</button>
        </div>
        <div className="control-btn-2">
          <button>Обновить корзину</button>
        </div>
      </div>

      <div className="Total-cart">
        <p>
          Подытог: <span> 129$</span>
        </p>
        <div className="Total-cardss">
          <div className="total-basket">
            <h3>Итого:</h3>

            <h3>129$</h3>
          </div>

          <button id="total-basket-btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
