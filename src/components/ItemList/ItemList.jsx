import React from 'react';
import Item from '../Item/Item';
import "./itemList.css"

const ItemList = ({ productos }) => {

    return (
        <>
            <div className='contiene-tarjetas'>
                {productos.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
            </div>

        </>
    );
};

export default ItemList;