import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider =({  children  }) => {
    const [carrito, setCarrito] = useState([])

    const agregarProducto = (productoNuevo) => {
        setCarrito([ ...carrito, productoNuevo ])
    }
    console.log(carrito)
    const cantidadTotal = () => {
        const totalProductos = carrito.reduce ((total, productoCarrito) => total + productoCarrito.cantidad, 0) 
        return totalProductos
    }

    return (
            <CartContext.Provider value = {{carrito, agregarProducto, cantidadTotal}}>
                {children}
            </CartContext.Provider>   
    )
}

export { CartProvider, CartContext}