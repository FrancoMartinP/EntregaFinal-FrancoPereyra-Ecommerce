
const FormularioChackout = ({datosForm, handleChangeInput, handleSubmitForm}) => {

  return (
    <form className="form" onSubmit={handleSubmitForm}>
            <label>Nombre: </label>
            <input type="text" name='nombre' value={datosForm.nombre} onChange={handleChangeInput} />

            <label>Telefono: </label>
            <input type="text" name="telefono" value={datosForm.telefono} onChange={handleChangeInput} />

            <div  className="correo">
                <label>Email: </label>
                <input type="email" name="email" value={datosForm.email} onChange={handleChangeInput} />
            </div>
            <div  className="correo">
                <label>Repetir Correo electronico: </label>
                <input  type="email" name="email" value={datosForm.email} onChange={handleChangeInput} />

            </div>

            <button type="submit">Enviar Solicitud</button>
    </form>
  )
}
export default FormularioChackout