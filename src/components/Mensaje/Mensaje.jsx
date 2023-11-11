import React from 'react';

const Mensaje = ({option,options,optionSelected}) => {

   return(
        <div>
            {options.map((op)=> {
                return(
                    <div key={op.value}>
                        <input 
                        type="radio" 
                        name='options'
                        value={op.value}
                        checked={option === op.value}
                        onChange={()=> {
                            optionSelected(op.value)
                        }}/>
                        <label htmlFor={op.value}>{op.value}</label>
                    </div>
                )
            })}
        </div>
    )
};

export default Mensaje;