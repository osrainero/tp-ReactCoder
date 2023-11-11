import React from 'react';

const Button = ({funcionClick}) => {
    return (
        <button onClick={funcionClick}>
            Click
        </button>
    );
};

export default Button;