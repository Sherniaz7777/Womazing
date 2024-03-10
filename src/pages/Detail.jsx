import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getShopId } from "../redux/slice/cardSlice";

const Detail = (props) => {
  const paramas = useParams();
  const {cart, loading, err}= useSelector((state)=>state.carts)

  const dispatch= useDispatch()

  useEffect(()=>{
     dispatch(getShopId(paramas.ProducId))
  },[])
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="Container">
        <button className="back-btn" onClick={props.back}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
            alt="back"
          />
        </button>
        <div className="Detail">
          <div className="detail-img">
            <img src={cart.img} alt="" />
          </div>
          <div className="detail-info">
            <h3>{cart.name}</h3>
            <p>{cart.price}$</p>
            <div className="detail-btn">
              <button
                onClick={() => setCount(count + 1)}
                className="detail-btn-1"
              >
                {count}
              </button>

              <button
                className="detail-btn-2"
                onClick={() => {
                  props.addToCart(cart);
                }}
              >
                {props.t("Добавить в корзину")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
