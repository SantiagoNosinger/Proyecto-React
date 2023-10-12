import React from "react";
import "./Pagina.css";


export default class Menu extends React.Component{
    
    render(){
        return(
             
            
            <nav className="navbar navbar-expand-lg  navbar-dark presentacion shadow fixed-top">
                <a classNameName="navbar-brand scale-up-center" href="/"> <img src="img/Sin título (1).png" alt="logo" width="100"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto text-uppercase">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Inicio </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/contacto.web">Contacto</a>
                        </li> 
                    </ul>
                
                </div>
            </nav>
        
        )
    }
}