import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import "./checkout.css"
import { Link } from 'react-router-dom';

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
            title: `Compra realizada! Número de Operacion: ${randomNumber}`,
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
        <div className='div-checkout'>
            <form className='form-checkout'>
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


                <div className='div-precio'>
                    <h1>Valor Final</h1>
                    <p>Total Productos : {getTotalProductos()} </p>
                    <p>Precio Final: {TotalPorProductos()} </p>

                </div>

                <div>
                    <Link to={"/Carro"}>Volver a Carrito</Link>
                    <button className={` ${botonVisible ? '' : 'invisible-btn'}`} type="submit" onClick={procesoPago}>Pagar</button>
                </div>

            </form>
        </div>
    );
};

export default Checkout;
