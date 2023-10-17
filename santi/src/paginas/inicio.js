import React from "react";
import './pagina.css'


import Pagina from '../componentes/pagina';


export default class Inicio extends React.Component {
        
    render(){
        return (

        
            <div className="container ">      
                <div class="container-fluid">
                    <div class="row p-4 m-5 text-center">
                        <div class="col-12 col-sm-6 mx-auto">               
                            <h1 class="texto m-5">Pablo M.<span class="segunda-linea texto"> Nösinger</span></h1>
                            <h5 class="pt-5 text-white">Profesional experto y apasionado que brinda atención personalizada del más alto nivel en la búsqueda de tu hogar. Nuestra experiencia permitirá que tu compra o venta sea un éxito.</h5>
                        </div>
                    </div>
                </div>
                
                <Pagina 
                imagen="Alquileres.jpg"
                titulo="Alquileres" 
                descripcion="Alquileres de casas, Departamentos, Locales, Temporarios, Para estudiantes, Quintas." 
                boton="success" 
                color="verde"
                texto="Alquileres"
                link="/alquileres.web"/>
        
                <Pagina 
                imagen="venta.jpg"
                titulo="Ventas" 
                descripcion="Venta de casas, Departamentos, Locales, Terrenos." 
                boton="primary" 
                color="azul"
                texto="Ventas"
                link="/ventas.web"/>
        
        
                <Pagina 
                imagen="contratos.jpg"
                titulo="Requisitos y Contratos" 
                descripcion="Información sobre los requisitos y CONTRATOS" 
                boton="warning" 
                color="requisito"
                texto="Ingresar"
                link="/informacion.web"/>

                <div className="container my-5">
                    <div className="row gradientesdivs shadow-drop-center d-flex border border-success">
                        <div className="col-12 col-md-3 py-4 shadow align-items-center ">
                            <img src="img/clima.jpg" alt="alquileres" width="200px" className="rounded-circle mr-3 d-none d-sm-block" />
                        </div>
                        <div className="col-12 col-md-9 py-4 shadow align-items-center ">
                            <h3><i className="bi bi-cloud-haze2 azul"></i>Clima</h3>
                            <p className="lead">Si quieres consultar sobre el clima ingresa aquí</p>
                            <a href="/clima.web" className="btn btn-primary">Clima</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }        
}