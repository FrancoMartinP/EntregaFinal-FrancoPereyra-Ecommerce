import ItemCount from "./ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ( {producto} ) => {
  const {agregarProducto} = useContext(CartContext)

  const agregarAlCarrito = (contador) => {
    const productoCarrito = {...producto, cantidad: contador}
    agregarProducto(productoCarrito)
  }
  return (
    <div className="item">
        <div>
            <img src={producto.imagen} alt="" />
            <h1>{producto.nombre}</h1>
        </div>
        <div>
            <p>{producto.descripcion}</p>
            <p><b>{producto.precio}</b> </p>
        </div>
       <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>
    </div>
  )
}

export default ItemDetail