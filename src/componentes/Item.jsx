import { useState } from "react"
import { Link } from "react-router-dom"

const Item = ({producto}) => {
  /*const [expandir, setExpandir] = useState(false)

  const handleMouseOver = () => {
    setExpandir(true)
  };
  const handleMouseLeave = () => {
    setExpandir(false)
  }; 
*/
  return (
    <Link className="cartaProducto" to={"/descripcion/" + producto.id}>  
      <div className="prod"/*className={expandir ? 'prod' : 'card'}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}*/
      >
      <img width={250} src= {producto.imagen}/>
       </div>
      <div>
      <p className="texto">{producto.nombre}</p>
      </div>
    </Link> 
  )
}

export default Item