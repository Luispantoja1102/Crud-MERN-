import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import ListaUsuario from './components/ListaUsuario';
import EditarUsuario from './components/EditarUsuario';
import AgregarUsuario from './components/AgregarUsuario';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="//" element={<ListaUsuario />} exact />
          <Route path="/editarusuario" element={<EditarUsuario />} exact />
          <Route path="/agregarusuario" element={<AgregarUsuario />} exact />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
