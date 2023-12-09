import React from 'react';
import { Link } from 'react-router-dom';
import "./item.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({ producto }) => {
    function truncate(str, n){
        return (str.length > n) ? str.slice(0, n-1) + '...' : str;
      }
    return (
        <>
        <Card className='card' style={{ width: '16rem' }}>
            <Card.Img variant="top" src={producto.img} alt={producto.nombre} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{truncate(producto.descripcion, 100)}
                </Card.Text>
                <Button variant="secondary" as={Link} to={`/item/${producto.id}`}>Mas detalles</Button>
            </Card.Body>
        </Card>
        </>
    );
};

export default Item;



  

        
