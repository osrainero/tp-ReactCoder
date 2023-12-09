import React, { useState, createContext } from 'react';
export const CartContext = createContext()

export const CartProvider = ({ children }) => {

   
    const [cartProducto, setCartProducto] = useState([]);

    const isInCart = (itemId) => {
        return cartProducto.some((i) => i.producto.id === itemId);
    }
  
    const addProductoToCart = (producto, cantidad) => {
        if (!isInCart(producto.id)) {
            setCartProducto((prev) => [...prev, { producto, cantidad }])
        } else {
            console.log("No se puede agregar otro item")
        }
    }

    const removeProducto = (id) => {   
        const filtrarCarrito = cartProducto.filter((s) => s.producto.id !== id)
        setCartProducto(filtrarCarrito)
    }

    const clearCart = () => {
        setCartProducto([]);
    }

    const getTotalProductos = () => {
        let cantidad = 0
        cartProducto.forEach((item) => cantidad += item.cantidad)
        return cantidad
    }

    const TotalPorProductos = () => {
        let total = 0;
    
        cartProducto.forEach((item) => {
            const { cantidad, producto } = item;
            if (producto && typeof producto.cantidad === 'number' && typeof producto.precio === 'number') {
                total += cantidad * producto.precio;
            }
        });
        return total.toFixed(2);
    }

    return (
        <CartContext.Provider value={
            {
                cartProducto,
                setCartProducto,
                addProductoToCart,
                isInCart,
                getTotalProductos,
                removeProducto,
                clearCart,
                TotalPorProductos
            }
        }>
            {children}
        </CartContext.Provider>
    );
};