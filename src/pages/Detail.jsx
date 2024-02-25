import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const paramas = useParams();
  const [products, setProducts] = useState(null);
  const [count, setCount] = useState(0);

  async function getProduc() {
    const { data } = await axios.get(
      `https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name/${paramas.ProducId}`
    );
    setProducts(data);
    console.log(data);
  }

 
  useEffect(() => {
    getProduc();
  }, []);

  if (products == null) {
    return <h1 style={{ textAlign: "center" }}>Loading</h1>;
  }
  return (
    <div>
      <div className="Container">
      <button className="back-btn" onClick={props.back}><img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="back" /></button>
        <div className="Detail">
          <div className="detail-img">
            <img src={products.img} alt="" />
          </div>
          <div className="detail-info">
            <h3>{products.name}</h3>
            <p>{products.price}$</p>
            <div className="detail-btn">
              <button onClick={() => setCount(count + 1)} className="detail-btn-1" >{count}</button>
              
              <button  className="detail-btn-2" onClick={() => {props.addToCart(products)}}>{props.t("Добавить в корзину")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
