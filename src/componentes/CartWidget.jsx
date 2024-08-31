import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
const {cantidadTotal} = useContext(CartContext)

  return (
    <Link className="cantidad" to="/cart">
    <img src="https://image.freepik.com/vector-gratis/icono-carrito-compras_1262-10764.jpg" width={40} />
    <p className="cantidad1"> { cantidadTotal() }</p>
    </Link>
  )
}

export default CartWidget