import React, { useContext }  from "react";
import Badge from 'react-bootstrap/Badge';

import "../CartWidget/cartWidget.css"
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {

    const { getTotalProductos } = useContext(CartContext)

    return (
        <nav className="cart-widget">
            <div className="cart-info">
                <BsFillCartFill /> <Badge pill bg="dark">{getTotalProductos()}</Badge>
           
            </div>
        </nav>
    )
}

export default CartWidget;