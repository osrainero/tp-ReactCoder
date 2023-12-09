import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Item from "../Item/Item";
import "./cart.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Carro = () => {
    const { cartProducto, clearCart,removeProducto,getTotalProductos } = useContext(CartContext);

    return (
        <div className='productsContainer'>
            <h1>Carro de Compras</h1>
            <ul className='list-inline'>
                {
                    cartProducto && cartProducto.length > 0 ? (
                        cartProducto.map((item) => (

                            <li key={item.producto.id}>
                                <Item producto={item.producto} />
                                <Button variant="dark" onClick={() => removeProducto(item.producto.id)}>Eliminar</Button>
                                </li>
                        ))
                    ) : (
                        <h2>No hay elementos en el carrito!</h2>
                    )
                }

            </ul>
            {cartProducto && cartProducto.length > 0 && (
                    <Button variant="dark" onClick={clearCart}>Vaciar Carrito</Button>
            )}
            {cartProducto && cartProducto.length > 0 && (
                <Button variant="success" as={Link} to={`/Checkout`}>Comprar!</Button>
            )}
        </div >
    );
};

export default Carro;
