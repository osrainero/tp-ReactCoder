import React, {useState} from 'react';
import "./Interruptor.css"

const Interruptor = () => {
    const [encendido, setEncendido] =useState(false)
    const alternarinterruptor = ()=> {
        setEncendido(!encendido)
    }
    return (
        <>
            <h3>Interruptor</h3>
            <div className={'caja ${encendido ? "encendido"}'}>
                <div className="circulo">
                    <button onClick={alternarinterruptor}>Alternar</button>
                </div>

            </div>
        </>
    );
};

export default Interruptor;