import React from "react";
import { Link } from "react-router-dom";
import "./item.scss";

const Item = ({ product }) => {
  const originalPrice = product.price / (1 - product.descount / 100);
  const formattedPrice = product.price.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedOriginalPrice = originalPrice.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <>
      <Link to={`/item/${product.id}`}>
        <div className="contenedor">
          <div>
            <img src={product.img} alt={product.name} />
          </div>
          <div>
            <h3 className="contenedor__name">{product.name}</h3>
            <p className="contenedor__price">${formattedPrice}</p>
            <p className="contenedor__description">{product.description}</p>
            <p className="contenedor__size">{product.size}</p>
            <p className="contenedor__info">
              <span className="info-text">+ Info</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
