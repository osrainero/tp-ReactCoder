import React from 'react';
import UserProfile from '../UserProfile/UserProfile';


const Greeting = () => {
    const user ={
        name: "Lionel",
        age: 20,
        isAdmin: true
    }

    return (
        <div>
           <h1>Bienvenido {user.name}</h1>
            <UserProfile visitante={user}/>
        </div> 
    );
};

export default Greeting;