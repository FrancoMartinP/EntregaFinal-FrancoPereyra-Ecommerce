import { useState, useEffect } from "react";
import obtenerProductos from "../data/data.js";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);
  const { idCategoria } = useParams()

  useEffect(() => {
    obtenerProductos()
    .then((respuesta) =>{
      if (idCategoria) {
        const prodFiltrados = respuesta.filter ( (producto)=> producto.categoria === idCategoria)
        setProductos(prodFiltrados)
      }else {
        setProductos(respuesta);
      }
   
    })
    .catch((error)=>{
      console.error(error);
    })
    .finally(() =>{
      console.log("Finalizo la carga")
    });
  }, [idCategoria]);

  return (
    <div className="item">
      <h2>Bienvenido a mi E-commerce</h2>
      <ItemList productos={productos} />


    </div>

  )
}

export default ItemListContainer