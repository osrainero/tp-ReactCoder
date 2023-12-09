import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "./ItemDetail.css"



const ItemDetail = ({ producto }) => {

    const { addProductoToCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(0);


    const onAdd = (cant) => {
        setQuantity(cant)
        addProductoToCart(producto, cant)
    }

    return (
        <div className='div-detalle'>
            <img src={producto.img} alt={producto.nombre} />
            <h1>{producto.nombre}</h1>
            <p>Stock: {producto.cantidad}</p>
            <p>Precio: {producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>Descripción: {producto.descripcion}</p>


            {quantity
                == 0 ?
                <ItemCount initial={1} stock={producto.cantidad} onAdd={onAdd} />
                :
                <Link to={"/Carro"}>Ir al carrito</Link>
            }

        </div>
    );
};

export default ItemDetail;