import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import { Button, CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './itemDetail.css'



const ItemDetail = ({ producto }) => {

    const { addProductoToCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(0);


    const onAdd = (cant) => {
        setQuantity(cant)
        addProductoToCart(producto, cant)
    }

    return (
        <>
            <Card className='card' style={{ width: '25em' }}>
                <Card.Img className="productImg" variant="top" src={producto.img} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                    {producto.descripcion}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Precio: {producto.precio}</ListGroup.Item>
                    <ListGroup.Item>Stock:  {producto.cantidad}</ListGroup.Item>
                </ListGroup>

                <CardBody>
                {
                quantity
                 == 0 ?
                <ItemCount initial={1} stock={producto.cantidad} onAdd={onAdd} />
                 :
                <Link to={"/Carro"}>Ir al carrito</Link>
                }
                </CardBody>
                
            </Card>
        </>

    );
};

export default ItemDetail;