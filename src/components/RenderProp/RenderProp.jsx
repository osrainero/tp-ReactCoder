import React from 'react';

const RenderProp = ({funcion}) => {
    return (
        <div>
            <button onClick={funcion}>
                Render button
            </button>
            
        </div>
    );
};

export default RenderProp;