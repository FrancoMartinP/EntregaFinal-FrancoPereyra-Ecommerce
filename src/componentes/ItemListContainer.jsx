import { useState, useEffect } from "react";
import obtenerProductos from "../data/data.js";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { DotLoader } from "react-spinners";

const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);
  const [estaCargando, setEstaCargando] = useState(false)
  const { idCategoria } = useParams()
  

  useEffect(() => {

    setEstaCargando(true)
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
      setEstaCargando(false)
      console.log("Finalizo la carga")
    });
  }, [idCategoria]);

  return (
    <div className="item">
      <h2>Bienvenido a mi E-commerce</h2>
      {estaCargando ? <div><DotLoader
  color="black"
  cssOverride={{}}
/></div>: <ItemList productos={productos} />}
      


    </div>

  )
}

export default ItemListContainer