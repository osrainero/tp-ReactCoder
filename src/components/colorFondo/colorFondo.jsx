import React from 'react';

const colorFondo = (Componente,color) => {
    return (props) => {

        return(
            <div style={{backgroundColor: color}}>
                <Componente {...props} />
            </div>
        )

    }
};

export default colorFondo;