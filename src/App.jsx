
import './App.css'

import NavBar from './componentes/NavBar'
import logoTienda from './imagen/fondo1.jpg'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer'
/*import ComponentePadre from './componentes/ComponentePadre'
import LogoHarry from './imagen/harry.jpg'*/

const App = () => {
 return (
 <div className='titulo'>
  <img src={logoTienda} alt="" />
  <NavBar/>
  <ItemListContainer className="item" />
  <ItemDetailContainer />
    <div className='carrito'>

    </div>
 </div>

  )
 }

export default App
