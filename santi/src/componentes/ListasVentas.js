import React from "react";
import './Pagina.css'

export default class ListaVentas extends React.Component{
    
    render(){
        return(
                
            
            <div className="container shadow my-5 ">
                <div className="row gradientesdivs shadow-drop-center">
                    <div className={"col-12 py-4 shadow d-flex align-items-center border border-" + this.props.boton}>
                        <div id="carouselExampleIndicators" className="carousel slide container">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={".img/" + this.props.imagen1} className="d-block w-100" alt="imagen 1"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={".img/" + this.props.imagen2} className="d-block w-100" alt="imagen 2"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={".img/" + this.props.imagen3} className="d-block w-100" alt="imagen 3"/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div  className="gradienteLetras rounded shadow">
                            <h2 className={this.props.color}>{this.props.titulo}</h2>
                           
                            <div className="container-fluid">

                                <div className="letras1">
                                   <p><b className="azul">Habitaciones:</b> {this.props.habitaciones}</p>
                                   <p><b className="azul">Baños:</b> {this.props.baños}</p>
                                   <p><b className="azul">Balcón:</b> {this.props.balcon}</p>
                                   <p><b className="azul">Garage:</b> {this.props.garage}</p>
                                   <p><b className="azul">Descripcion:</b> {this.props.descripcion}</p>
                                   <p><b className="azul">Precio:</b> {this.props.precio}</p>                            
                                </div>
                            </div>
                                                        
                
                        </div>

                    </div>
                </div>                
            </div>                

        )
    }
}
