import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

const ItemDetail = ({ producto }) => {
  const onAdd = (quantity) => {
    console.log(quantity);
  };
  return (
    <>
      <div className="detail-container">
        <div>
          <img src={producto.img} alt={producto.name} />
        </div>
        <div>
          <h2>{producto.name}</h2>
          <p class="detail-container__price">${producto.price}</p>
          <p class="detail-container__description">{producto.description}</p>
          <p class="detail-container__size">{producto.size}</p>
          <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
