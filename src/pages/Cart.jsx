import React from "react";
import Deletee from "../assets/Vector 3.png";

const Cart = () => {
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

      <div className="shop-basket">
        <div className="basket-title">
          <button id="cart-btn">
            <img src={Deletee} alt="" />
          </button>
          <img
            src="https://s3-alpha-sig.figma.com/img/7fc4/bc47/71ab1d0089b775add6e2f8b8a2b34af1?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HQYrV-qVZKVccrv06xE9CsU0VcacBRpLJIKe60EhVC-t7GGgIuYNvrXegkmsl0Fa3pRJmvc-END~d9eNDinErcTp8jftzPKCKwB1CgW-9hzghMGbsT6e~~o9CQpi-i~Pv8zpV5WBuUHygPGgemlQflYnAahadJQEvoIjjq5rXi2xf3QCXW2ZIfRE30DavAJ5wd3UW-XcB6jPEieouZshCyxgN3p1ATVR--oCfHF6pa9JRiySbs3sezmtbBqj~UI3OKDwZMaMfyuhmic2U-I8Jw1IeU9apRzuAa2LcUfaKcBmu3LiC7L54yFbdxcS8eeiWXvkdgqJ2DxTElplyzj4sA__"
            alt=""
          />

          <h4>Футболка USA</h4>
        </div>
        <p>$129</p>
        <button id="cart-btn-counter">1</button>
        <span>$129</span>
      </div>

      <div className="control-btn">
        <div className="control-btn-1">
          <input type="text" />
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
