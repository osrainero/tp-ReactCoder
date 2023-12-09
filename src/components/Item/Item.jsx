import React from 'react';
import { Link } from 'react-router-dom';
import "./item.css";

const Item = ({ producto }) => {

    return (
        <>
            <div className='contenedor'>
                
                <Link to={`/item/${producto.id}`}>
                    <h1> {producto.nombre}</h1>
                </Link>

                <img src={producto.img} alt={producto.nombre} />
            </div>
        </>
    );
};

export default Item;



  

        
