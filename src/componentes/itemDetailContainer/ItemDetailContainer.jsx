import { useState, useEffect } from "react"
import obtenerProductos from "../../data/data.js"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"

const ItemDetailContainer = () => {
const [producto, setProducto] = useState({})
const { idProducto } = useParams()

/*useEffect((idProducto) => {
    obtenerProductos()
    .then ((data) =>{
        const productoDetalle = data.find( (productoData) => productoData.id === idProducto )
        setProducto(productoDetalle)
    })
}, [idProducto])*/

useEffect(() => {
  obtenerProductos()
  .then((data) =>{
    if (idProducto) {
      const productoDetalle = data.filter ( (productoData)=> productoData.categoria === idProducto)
      setProducto(productoDetalle)
    }
  })
  .catch((error)=>{
    console.error(error);
  })
  .finally(() =>{
    console.log("Finalizo la carga")
  });
}, []);


  return (
<ItemDetail  producto={producto}/>
  )
}

export default ItemDetailContainer