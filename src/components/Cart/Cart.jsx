import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Item from "../Item/Item";
import "./cart.css";
import { Link } from 'react-router-dom';

const Carro = () => {
    const { cartProducto, clearCart,removeProducto,getTotalProductos } = useContext(CartContext);


    return (
        <div className='div-carro'>
            <h1>Carro de Compras </h1>
            <ul>
                {
                    cartProducto && cartProducto.length > 0 ? (
                        cartProducto.map((item) => (

                            <li key={item.producto.id}>
                                <Item producto={item.producto} />
                                <button className='button-cart' onClick={() => removeProducto(item.producto.id)}>Eliminar del Carrito</button>
                            </li>
                        ))
                    ) : (
                        <h3>No hay elementos en el carrito!</h3>
                    )
                }

            </ul>
            {cartProducto && cartProducto.length > 0 && (
                <button onClick={clearCart}>Limpiar Carrito</button> 
            )}
            {cartProducto && cartProducto.length > 0 && (
                <Link to={"/Checkout"}>Finalizar Compra</Link>
            )}
        </div >
    );
};

export default Carro;
