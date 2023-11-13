import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemdetailContainer/ItemDetailContainer";
import Aboutus from "./components/Aboutus/Aboutus";
import Error from "./components/Error/Error";
import Contacto from "./components/Contacto/Contacto"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
