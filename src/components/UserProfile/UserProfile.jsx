import React from 'react';

const UserProfile = ({visitante}) => {
    return (
        <>
          <p>Nombre: {visitante.name}</p>  
          <p>Edad: {visitante.age}</p> 

        </>
    );
};

export default UserProfile;