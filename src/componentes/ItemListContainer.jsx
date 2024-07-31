import { useState, useEffect } from "react";
import obtenerProductos from "../data/data.js";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);

  useEffect(() => {
    obtenerProductos()
    .then((respuesta) =>{
      setProductos(respuesta);
    })
    .catch((error)=>{
      console.error(error);
    })
    .finally(() =>{
      console.log("Finalizo la carga")
    });
  }, []);

  return (
    <div className="item">
      <h2>Bienvenido a mi E-commerce</h2>
      <ItemList productos={productos} />


    </div>

  )
}

export default ItemListContainer