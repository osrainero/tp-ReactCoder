import React from "react";
import { BiCart } from "react-icons/bi";
import "./cartwidget.scss";

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <p>0</p>
      <BiCart className="cart" />
    </div>
  );
};

export default CartWidget;
