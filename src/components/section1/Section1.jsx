import React, { useEffect, useState } from "react";
import "./Section1.css";
import {  NavLink } from "react-router-dom";

const url = "https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name";

const Section1 = () => {
  const [look, setLook] = useState(null);

  async function getLook() {
    const res = await fetch(url);
    const data = await res.json();
    setLook(data);
  }

  useEffect(() => {
    getLook();
  }, []);

  if (look == null) {
    return <h1 style={{textAlign:"center"}}>Loading</h1>
  }

  return (
    <div>
      <div className="Container">
        <h1>Новая коллекция</h1>
        <div className="look-container">
          {look.map((el) => (
            <NavLink className="NavLink" to={`/detail/${el.id}`} key={el.id}>
              <div className="look" key={el.id}>
                <div>
                  <img src={el.img} alt={el.name} />
                  <h1>{el.name}</h1>
                  <p>{el.price}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        <p id="btn-btn">
          <button>Открыть магазин</button>
        </p>
      </div>
    </div>
  );
};

export default Section1;
