import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./itemCount.scss";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="quantity-button">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            onAdd(count);
          }}
        >
          Agregar al carrito
        </Button>{" "}
      </div>
    </>
  );
};

export default ItemCount;
