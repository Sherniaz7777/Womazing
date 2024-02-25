import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const url = "https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name";
const Shop = ({t, back}) => {
  const [shoppro, setShop] = useState(null);

  async function getShop() {
    const { data } = await axios.get(url);
    console.log(data);
    setShop(data);
  }
  useEffect(() => {
    getShop();
  }, []);

  if (shoppro == null) {
    return <h1 style={{ textAlign: "center", }}>Loading</h1>;
  }
  return (
    <div className="Container">
      <button className="back-btn" onClick={back}><img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="back" /></button>
      <h1 className="Shop-h1">{t("Магазин")}</h1>

      <div className="Shop-Btn">
        <button>{t("Все")}</button>
        <button>{t("Пальто")}</button>
        <button>{t("Свитшоты")}</button>
        <button>{t("Кардиганы")}</button>
        <button>{t("Толстовки")}</button>
      </div>

      <div className="Shop-cards">
        {shoppro.map((el) => (
          <NavLink className="NavLink" to={`/detail/${el.id}`} key={el.id}>
            <div className="shop-cards-in">
              <img src={el.img} alt="" />
              <h3>{el.name}</h3>
              <p>{el.price}$</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Shop;
