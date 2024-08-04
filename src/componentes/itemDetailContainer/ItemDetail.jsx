

const ItemDetail = ( {producto} ) => {
  return (
    <div className="item">
        <div>
            <img src={producto.imagen} alt="" />
            <h1>{producto.nombre}</h1>
        </div>
        <div>
            <p>{producto.descripcion}</p>
            <p><b>{producto.precio}</b> </p>
        </div>
       
    </div>
  )
}

export default ItemDetail