import React from "react";
import './pagina.css'

export default class Contacto extends React.Component {
    constructor(props){
        super(props);

        this.state={
            Nombre: "",
            mensaje:""
        }

        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this)
    }

    submitted(event){
        alert("Formulario enviado de " + this.state.Nombre);
        event.preventDefault();
    }
        
    changed(event){
        this.setState({
            Nombre: event.target.value
        })
    }
    render(){
        return (
            <div>
                <div className="container-fluid">
                    <div className="row p-4 m-5 text-center">
                        <div className="col-12 col-sm-6 mx-auto">               
                            <h1 className="texto m-5">Pablo M.<span className="segunda-linea texto"> Nösinger</span></h1>
                            <h5 className="pt-5 text-white">Profesional experto y apasionado que brinda atención personalizada del más alto nivel en la búsqueda de tu hogar. Nuestra experiencia permitirá que tu compra o venta sea un éxito.</h5>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-dark text-white py-4 text-center rounded shadow-drop-center " id="contacto">
                    <div className="row ">
                        <div className="col-12 col-sm-6 text-center mx-auto">
                            <h2>Contacto</h2>
                        </div>
                        
                    </div>
                    <div className="row text-center rounded">
                        <div className="col-12 col-sm-6 mx-auto">
                            
                            <h3>Envianos un mail</h3>
                            <form onSubmit={this.submitted}>
                                <div className="form-group">
                                    <label> Nombre</label>
                                    <input type="text" className="form-control" placeholder="Ingresa tu nombre" onChange={this.changed}/>
                                </div>
                                <div className="form-group">
                                    <label> Email</label>
                                    <input type="text" className="form-control" placeholder="Ingresa tu mail"/>
                                </div>
                                <div className="form-group">
                                    <label> Mensaje</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-danger px-3 font-weight-bold shadow-drop-center"> Enviar </button>
                                </div>
                            </form>
                        </div>
                        
                        
                        <div className="col-12 col-sm-6">
                            <nav>
                                <ul className="list-inline">
            
                                    <li className="my-4">
                                        <a href="/" target="/" className="text-white"><i className="bi bi-facebook azul"> Pablo Nosinger</i></a>
                                    </li>
                                    
                                    
                                    <li className="my-4">
                                        <a href="/" target="_blank" className="text-white"><i className="bi bi-whatsapp verde"> +12345689</i></a>
                                    </li>
                                                            
                                    <li className="my-4">
                                        <a href="/" target="_blank" className="text-white"><i className="bi bi-twitter twitter"> No tengo je</i></a>
                                    </li>
            
                                    <li className="my-4">
                                        <a href="/" target="_blank" className="text-white"><i className="bi bi-instagram requisito"> Pablo</i></a>
                                    </li>
                                    
                                    <li className="my-4">
                                        <a href="/" target="_blank" className="text-white"><i className="bi bi-envelope-at rojo"> abcdef@gmail.com</i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}