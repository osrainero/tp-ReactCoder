import React from 'react';
import { BiCartAdd } from "react-icons/bi";


const CartWidget = () => {
    return (
        <div>
            <BiCartAdd />
            <span>0</span>
        </div>
    );
};

export default CartWidget;