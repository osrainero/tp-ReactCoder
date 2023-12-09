import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import "./checkout.css"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Checkout = () => {
    const { clearCart, TotalPorProductos, getTotalProductos } = useContext(CartContext);
    const [botonVisible, setBotonVisible] = useState(true);

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if ((name === "nombre" || name === "apellido") && !/^[A-Za-z]+$/.test(value)) {
            console.log("Nombre y Apellido deben contener solo letras");
            return;
        }
        if (name === "tel" && !/^\d+$/.test(value)) {
            console.log("Teléfono debe contener solo dígitos");
            return;
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const procesoPago = (e) => {

        e.preventDefault();

        if (Object.values(formData).some(value => value.trim() === "")) {
            console.log("Todos los campos deben estar llenos");
            return;
        }

        setBotonVisible(false);

        const randomNumber = Math.floor(Math.random() * 1000000) + 1;

        Swal.fire({
            position: "center",
            icon: "success",
            title: `Compra realizada! Número de seguimiento: ${randomNumber}`,
            showConfirmButton: true,
            confirmButtonText: "Confirmado",
            timer: 10000
        });

        clearCart();
        setFormData({
            nombre: '',
            apellido: '',
            email: '',
            tel: '',
        });
    };


    return (

        <div className='pagacion'>
            <form>
            <div className='formcontent'>
            <label>Nombre</label>
                <input
                    type="text"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    name="nombre"
                />

                <label>Apellido</label>
                <input
                    type="text"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    name="apellido"
                />

                <label>Email</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                />

                <label>Teléfono</label>
                <input
                    type="tel"
                    value={formData.tel}
                    onChange={handleInputChange}
                    name="tel"
                />
            </div>
            <div className='infocontent'>
            <h1>Estas por comprar:</h1>
                    <p>Cantidad de Productos : {getTotalProductos()} </p>
                    <p>Precio Final: {TotalPorProductos()} </p>
                <div>
                    <Button variant="secondary" as={Link} to={`/Carro`}>Volver al Carrito</Button><br/>
                    <Button variant="success" type="submit" onClick={procesoPago}>Pagar</Button>
                </div>

            </div>
            </form>
        </div>
    );
};

export default Checkout;
