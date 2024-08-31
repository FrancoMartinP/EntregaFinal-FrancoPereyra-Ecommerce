import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection} from "firebase/firestore";
import FormularioChackout from "./FormularioChackout";
import db from "../../database/db.js"

const Checkout = () => {

    const [datosForm, setDatosForm] = useState({
        nombre: '',
        telefono: '',
        email: '',
    });
    const [idOrden, setIdOrden] = useState(null)
    const {carrito, precioTotal} = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value})
    };

    const handleSubmitForm = (event) => {
      event.preventDefault();

      const orden = {
        comprador: {...datosForm},
        productos: [...carrito],
        fecha: Timestamp.fromDate(new Date()),
        total: precioTotal()
      }
      sendOrder(orden)
    }
    const sendOrder= async (orden) =>{
      try{
        const ordenesRef = collection(db, 'ordenes');
        const ordenDb = await addDoc(ordenesRef, orden);
        setIdOrden(ordenDb.id)
      }catch(error){
        console.log(error)
      }
      
    }

  return (
    <div className="notificacion">
      {
        idOrden ? (<div>
          <h2>Felicidades {datosForm.nombre}, sos un genio/a! Su compra fue aprobada 😎 </h2>
          <p>Guarde su N° de Orden:  {idOrden} </p>
        </div>) : (      
          <FormularioChackout 
          datosForm={datosForm} 
          handleChangeInput={handleChangeInput} 
          handleSubmitForm={handleSubmitForm}/>)
      }

    </div>
  )
}

export default Checkout