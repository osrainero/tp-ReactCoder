import React, {useState} from 'react';

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
        <div>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;