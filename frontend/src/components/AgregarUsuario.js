import React from "react";

function AgregarUsuario(){
  function agregarUsuario(){

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
            <input type="text" className="form-control" />
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="text" className="form-control" />
            <label htmlFor="telefono" className="form-label">Telefono</label>
            <input type="text" className="form-control" />
            <button onClick={agregarUsuario} className="btn btn-success mt-3">Agregar Usuario</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgregarUsuario;