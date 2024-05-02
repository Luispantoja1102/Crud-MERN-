import React from "react";

function UsuarioIndividual({usuario}){
    return (
        <div className="container">
            <div className="row">
                <ul className="list-group">
                    <li className="list-group-item">{usuario.idUsuario}</li>
                    <li className="list-group-item">{usuario.nombre}</li>
                    <li className="list-group-item">{usuario.email}</li>
                    <li className="list-group-item">{usuario.telefono}</li>
                </ul>
                <div className="mt-4">
                    <button className="btn btn-success">Editar</button>
                    <button className="btn btn-danger">Borrar</button>
                </div>
                <hr className="my-4"></hr>
            </div>
        </div>
    );
};
export default UsuarioIndividual;