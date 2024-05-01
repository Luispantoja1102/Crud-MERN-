import React from "react";

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container">
                <a className="navbar-brand" href="#">Crud MERN Stack</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="colla   pse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/agregarusuario">Agregar Usuario</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/editarusuario">Editar Usuario</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;