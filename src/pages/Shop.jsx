import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const url = "https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name";
const Shop = () => {
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
    return <h1>Loading</h1>;
  }
  return (
    <div className="Container">
      <h1 className="Shop-h1">Магазин</h1>

      <div className="Shop-Btn">
        <button>Все</button>
        <button>Пальто</button>
        <button>Свитшоты</button>
        <button>Кардиганы</button>
        <button>Толстовки</button>
      </div>

      <div className="Shop-cards">
        {shoppro.map((el) => (
          <NavLink className="NavLink" to={`/detail/${el.id}`} key={el.id}>
            <div className="shop-cards-in">
              <img src={el.img} alt="" />
              <h3>{el.name}</h3>
              <p>{el.price}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Shop;
