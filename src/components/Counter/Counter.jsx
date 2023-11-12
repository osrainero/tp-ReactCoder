import React from 'react';
import useCounter from '../useCounter/useCounter';

const Counter = () => {

    const {count,increment,decrement} = useCounter(0)
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>AUMENTO</button>
            <button onClick={decrement}>DECREMENTO</button>
        </div>
    );
};

export default Counter;