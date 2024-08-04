

const ItemDetail = ( producto ) => {
  return (
    <div className="item">
    <img src={producto.imagen} alt="" />
    <h2>{producto.nombre}</h2>
    <p>{producto.descripcion}</p>
    <p><b>{producto.precio}</b> </p>
    </div>
  )
}

export default ItemDetail