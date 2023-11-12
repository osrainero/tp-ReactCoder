import { useState,useEffect  } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBarra from './components/NavBarra/NavBarra.jsx';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Counter from './components/Counter/Counter'
import Card from './components/Card/Card'
import colorFondo from './components/colorFondo/colorFondo'
import Button from './components/Button/Button'
import RenderProp from './components/RenderProp/RenderProp'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto'
import Ubicacion from './components/Ubicacion/Ubicacion'
import Error from './components/Error/Error'
import Mensaje from './components/Mensaje/Mensaje'
import Cart from './components/Cart/Cart'

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
