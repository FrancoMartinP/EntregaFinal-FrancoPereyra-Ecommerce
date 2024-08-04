
import './App.css'

import NavBar from './componentes/NavBar'
import logoTienda from './imagen/fondo1.jpg'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer'
import CartWidget from './componentes/CartWidget'
import Titulo from './componentes/Titulo'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


/*import ComponentePadre from './componentes/ComponentePadre'
import LogoHarry from './imagen/harry.jpg'*/

const App = () => {
 return (
 <BrowserRouter>
    <div className='contenedor'>
      <Link to="/">
        <img src={logoTienda} alt="" />
      </Link>
      <div className='titulo'>
        <Titulo/>
      </div >
      <div className='carrito'>
        <CartWidget/>
      </div>
    </div>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer className="item" />}/>
      <Route path='/categoria/:idCategoria' element={<ItemListContainer className="item" />} />
      <Route path='/descripcion/:idProducto' element={<ItemDetailContainer />}/>
    </Routes>


 </BrowserRouter>

  )
 }

export default App
