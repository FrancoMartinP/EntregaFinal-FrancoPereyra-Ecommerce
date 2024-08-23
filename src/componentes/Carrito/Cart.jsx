import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart = () => {
const { carrito, precioTotal, borrarProducto, vaciarCarrito} = useContext(CartContext)

  return (
    <div>
        {
            carrito.map((productoCarrito) => (
                <ul style={{flexDirection: "column"}}>
                    <li style={{display:"flex", justifyContent:"space-around"}}>
                        <img width={150}src={productoCarrito.imagen} alt="" />
                        <p>{productoCarrito.nombre}</p>
                        <p> Cantidad: {productoCarrito.cantidad}</p>
                        <p> Precio: ${productoCarrito.precio}</p>
                        <p>$ {productoCarrito.precio * productoCarrito.cantidad}</p>
                        <button onClick={() => borrarProducto(productoCarrito.id)}>Eliminar</button>
                    </li>
                </ul>
                
            ))
        }
        <h2>Precio Total: ${precioTotal()}</h2>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart