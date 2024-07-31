import { useState, useEffect } from "react"
import obtenerProductos from "../../data/data.js"

const ItemDetailContainer = () => {
const [producto, setProducto] = useState({})
useEffect(() => {
    obtenerProductos()
    .then ((data) =>{
        const productoDetalle = data.find((productoData) => productoData.id === 1 )
        setProducto(productoDetalle)
    })
}, [])

  return (
    <div>
        <img src={producto.imagen} alt="" />
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p><b>{producto.precio}</b> </p>
        <button onClick={"sumar"}>Agregar al Carrito</button>
        <button onClick={"Sumar"}>+</button>
        <button onClick={"restar"}>-</button>

    </div>
  )
}

export default ItemDetailContainer