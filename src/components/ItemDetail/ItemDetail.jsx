import React,{useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {

    const [quantity,setQuantity] = useState(0)

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
    }
    
    return (
        <div>
            <img src={producto.img} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>Stock: {producto.stock}</p>
            <p>Precio: {producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>Descripción: {producto.descripcion}</p>
            {quantity 
            == 0 ? 
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
            :
            <Link to={"/Cart"}>Ir al carrito</Link>
            }
        </div>
    );
};

export default ItemDetail;