import CartWidget from './CartWidget'
import Titulo from './Titulo'

const NavBar = () => {
  return (
    <nav>
        <div>
        <Titulo/>
        </div>
            <ul>
                <li>Accion</li>
                <li>Aventura</li>
                <li>Magia</li>
            </ul>
            <CartWidget/>

    </nav>
  )
}

export default NavBar