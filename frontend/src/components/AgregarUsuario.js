import React, {useState} from "react";
import uniqid from "uniqid";
import axios from "axios";

function AgregarUsuario(){
  //hooks
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  function agregarUsuario(){
    var usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idUsuario: uniqid()
    }
    console.log(usuario);
    axios.post("http://localhost:5000/api/usuario/agregarusuario", usuario)
    .then((res) => {
      alert(res.data);
    })
    .then(err => {
      console.log(err);
    })
  }
  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Agregar Usuario</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" value={nombre} onChange={(e) =>{setNombre(e.target.value)}} />
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="text" className="form-control" value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
            <label htmlFor="telefono" className="form-label">Telefono</label>
            <input type="text" className="form-control" value={telefono} onChange={(e)  =>{setTelefono(e.target.value)}}/>
            <button onClick={agregarUsuario} className="btn btn-success mt-3">Agregar Usuario</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgregarUsuario;