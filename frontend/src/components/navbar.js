import React from "react";

function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
            <div class="container">
                <a class="navbar-brand" href="#">Crud MERN Stack</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="colla   pse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/agregarusuario">Agregar Usuario</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/editarusuario">Editar Usuario</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;