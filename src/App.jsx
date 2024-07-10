
import './App.css'

import NavBar from './componentes/NavBar'
import logoTienda from './imagen/fondo1.jpg'
import ItemListContainer from './componentes/ItemListContainer'

const App = () => {
 return (
 <div className='titulo'>
  <img src={logoTienda} alt="" />
  <NavBar/>
  <ItemListContainer/>
    <div className='carrito'>

    </div>
 </div>

  )
 }

export default App
