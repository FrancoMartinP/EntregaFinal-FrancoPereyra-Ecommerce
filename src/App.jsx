
import './App.css'
import NavBar from './componentes/NavBar'
import logoTienda from './imagen/fondo1.jpg'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer'
import CartWidget from './componentes/CartWidget'
import Titulo from './componentes/Titulo'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import FormularioCompra from './componentes/FormularioCompra'
import { CartProvider } from './context/CartContext'
import Cart from './componentes/Carrito/Cart'
import Checkout from './componentes/Checkout/Checkout'



const App = () => {
 return (
 <BrowserRouter>
 <CartProvider>

 <Link to="/" className='contenedor'>
      <div>
        <img src={logoTienda} alt="" />
      </div>
      <div className='titulo'>
        <Titulo/>
      </div >
      <div className='carrito'>
        <CartWidget/>
      </div>
    </Link>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer className="item" />}/>
      <Route path='/categoria/:idCategoria' element={<ItemListContainer className="item" />} />
      <Route path='/descripcion/:idProducto' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/compra' element={<FormularioCompra />} />
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>

 </CartProvider>
    

 </BrowserRouter>

  )
 }

export default App
