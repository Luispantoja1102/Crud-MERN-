import React, { useState, useEffect } from "react";
import axios from "axios";
import UsuarioIndividual from "./UsuarioIndividual";

function ListaUsuario(){
  const [dataUsuarios, setdatausuario]=useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/usuario/obtenerusuarios')
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    

  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <UsuarioIndividual />
    </div>
  );
};
export default ListaUsuario;