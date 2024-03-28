import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div
      className="product-card"
      onClick={showDetail}
    >
      <img src={item.img} alt="" />
      <div>{item?.choice === true ? "Consious Choice" : ""}</div>
      <div>{item.title}</div>
      <div>{item.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
}
