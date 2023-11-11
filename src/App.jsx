import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBarra from './components/NavBar/NavBarra.jsx';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Greeting from './components/Greeting/Greeting.jsx';
import CardContainer from './components/CardContainer/CardContainer.jsx';
import Card from './components/Card/Card.jsx';
import Interruptor from './components/Interruptor/Interruptor.jsx';

function App() {
  
  return (
    <>
      <h1>Tienda de Remeras</h1>
      <div>
        <NavBarra />
      </div>
    </>
  );
}

export default App;
