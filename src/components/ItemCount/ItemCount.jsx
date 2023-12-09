import React, {useState} from 'react';
import './itemCount.css';
import Button from 'react-bootstrap/Button';

const ItemCount = ({initial,stock,onAdd}) => {


    const [count,setCount] = useState(initial)

    const increment = () => {
        if(count<stock){
            setCount(count+1)
        }
    }

    const decrement = () => {
        if(count>initial){
            setCount(count-1)
        }
    }

    const addToCart = () => {
        onAdd(count)
    }
    
    return (
        <>
        <Button className='counter' variant="secondary" size="sm" onClick={decrement}>-</Button>
        <p className='counter cant'>{count}</p>
        <Button className='counter' variant="secondary" size="sm" onClick={increment}>+</Button>
        <Button variant="primary addButton" size="sm" onClick={addToCart}>Agregar al carrito</Button>
        </>
    );
};

export default ItemCount;