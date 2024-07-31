
const Item = ({producto}) => {
  return (
    <div className="prod">
    <img width={300} src= {producto.imagen}/>
    <p>{producto.nombre}</p>
    </div> 
  )
}

export default Item