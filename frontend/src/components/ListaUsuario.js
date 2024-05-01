import React, { useState, useEffect } from "react";
import axios from "axios";
import UsuarioIndividual from "./UsuarioIndividual";

function ListaUsuario(){
  const [datausuarios, setdatausuario]=useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/usuario/obtenerusuarios').then((res) => {
      console.log(res.data);
      setdatausuario(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  //maperar lista de usuarios en objeto usuario
  const listausuarios = datausuarios.map((usuario) => {
    return (
      <div>
        <UsuarioIndividual usuario={usuario} />
      </div>
    )
  });

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {listausuarios}
    </div>
  );
};
export default ListaUsuario;