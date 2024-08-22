import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {
const {cantidadTotal} = useContext(CartContext)

  return (
    <div className="cartwidget">
        <p>🛒</p>
        <p>{ cantidadTotal() }</p>
    </div>
  )
}

export default CartWidget