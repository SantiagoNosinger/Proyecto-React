import React from "react";
import "./Pagina.css"


export default class Pagina extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            mostrar: false
        };

        this.cambiarMostrar = this.cambiarMostrar.bind(this);
    }
    cambiarMostrar(){
        var mostrarActual = this.state.mostrar;
        this.setState({
            mostrar: !mostrarActual
        })
    }
    render(){
        var clase = "";
        var texto = "";
        if(this.state.mostrar){
            clase="d-block";
            texto="mostrar menos"
        }else{
            clase="d-none";
            texto="mostrar mas";
        }

        return(

            <div class="container shadow my-5 ">
                <div class="row gradientesdivs position shadow-drop-center">
                    <div class={"col-12 py-4 shadow d-flex align-items-center border border-" + this.props.boton}>
                        <img src={"img/" + this.props.imagen} alt="alquileres" width="150px" class="rounded-circle mr-3 d-none d-sm-block"/>
                        <div>
                            <h2 class={this.props.color}><i class="bi bi-house-check-fill me-3"></i>{this.props.titulo}</h2>
                            
                            <p class={clase}>{this.props.descripcion}</p>
                            <button className={"btn btn-" + this.props.boton + " " + clase}>
                                <a href={this.props.link}  style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    {this.props.texto}
                                </a>
                            </button>
                            <button onClick={this.cambiarMostrar} class="btn btn-primary position-absolute bottom-0 end-0 mb-3 me-3">{texto}</button>
                        </div>

                    </div>
                </div>                
            </div>
        );
    }
}