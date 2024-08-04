import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <Link className="cartaProducto" to={"/descripcion/" + producto.id}>  
      <div className="prod">
      <img width={250} src= {producto.imagen}/>
      </div>
      <div>
      <p className="texto">{producto.nombre}</p>
      </div>
    </Link> 
  )
}

export default Item