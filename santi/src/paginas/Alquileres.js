import React from "react";
import ListaAlquileres from "../componentes/ListasAlquiler";

export default class Alquileres extends React.Component{
    
    render(){
        return(
            <div className="container">

                <div class="container-fluid">
                    <div class="row p-4 text-center">
                        <div class="col-12 col-sm-6 mx-auto">               
                            <h1 class="texto">Pablo M.<span class="segunda-linea texto"> Nösinger</span></h1>
                            <h5 class="pt-5 text-white">Profesional experto y apasionado que brinda atención personalizada del más alto nivel en la búsqueda de tu hogar. Nuestra experiencia permitirá que tu compra y venta sea un éxito.</h5>
                        </div>
                    </div>
                </div>

                <ListaAlquileres 
                    imagen1="./ImagenesAlquileres/390681617.jpg"
                    imagen2="./ImagenesAlquileres/390681658.jpg"
                    imagen3="./ImagenesAlquileres/390681664.jpg"
                    titulo="Departamento" 
                    habitaciones="2"
                    baños="2"
                    garage="si"
                    balcon="si 1"
                    ubicacion="Las Vegas"
                    precio="A consultar"
                    descripcion="mansion, se aceptan mascotas"  
                    color="verde"/>
            
                <ListaAlquileres 
                    imagen1="./ImagenesAlquileres/390681617.jpg"
                    imagen2="./ImagenesAlquileres/390681658.jpg"
                    imagen3="./ImagenesAlquileres/390681664.jpg"
                    titulo="Casa" 
                    habitaciones="4"
                    baños="2"
                    garage="si"
                    balcon="si 2"
                    ubicacion="Las Vegas"
                    precio="A consultar"
                    descripcion="mansion, se aceptan mascotas"  
                    color="azul"/>
            
            
                <ListaAlquileres 
                    imagen1="./ImagenesAlquileres/390681617.jpg"
                    imagen2="./ImagenesAlquileres/390681658.jpg"
                    imagen3="./ImagenesAlquileres/390681664.jpg"
                    titulo="Quinta" 
                    habitaciones="4"
                    baños="2"
                    garage="si"
                    balcon="si 2"
                    ubicacion="Las Vegas"
                    precio="A consultar"
                    descripcion="mansion, se aceptan mascotas"  
                    color="rojo"
                />
                    

                    <div className="row gradienteContacto my-5 shadow-drop-center text-center text-white">
                        <div className="col-12 py-4 shadow mx-auto align-items-center border border-primary rounded d-flex flex-column">
                            <h3>Contacto</h3>
                            <p className="lead">
                            Si tiene alguna consulta, no dude en enviarnos un mensaje en el apartado de CONTACTOS
                            </p>
                            <a href="/contacto.web">    
                                <button className="btn btn-danger px-3 font-weight-bold shadow-drop-center">Contacto</button>
                            </a>
                        </div>
                    </div>

            </div>
            
        
        )
    }
}