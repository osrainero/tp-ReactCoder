import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar/Navbar'
import Contacto from './components/Contacto/Contacto'
import Nosotros from './components/Nosotros/Nosotros'
import Error from './components/Error/Error'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (

    <>
      <BrowserRouter>
      
        <CartProvider>
        <NavBar />
         

          <Routes>

            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:idProducto' element={<ItemDetailContainer />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/Carro' element={<Cart />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='*' element={<Error />} />

          </Routes>

        </CartProvider>

      </BrowserRouter>
    </>
  )
}

export default App
