import { useState, useEffect } from "react"
import obtenerProductos from "../../data/data.js"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"

const ItemDetailContainer = () => {
const [producto, setProducto] = useState({})
const { idProducto } = useParams()

useEffect(() => {
    obtenerProductos()
    .then ((data) =>{
        const productoDetalle = data.find( (productoData) => productoData.id === parseInt(idProducto) )
        setProducto(productoDetalle)
    })
}, [])

  return (
<ItemDetail  producto={producto}/>
  )
}

export default ItemDetailContainer