import React from "react";
import "./pagina.css"

export default class Informacion extends React.Component{
    
    render(){
        return(
            <div className="container my-5">

                <div class="container-fluid">
                    <div class="row p-4 text-center">
                        <div class="col-12 col-sm-6 mx-auto">               
                            <h1 class="texto">Pablo M.<span class="segunda-linea texto"> Nösinger</span></h1>
                            <h5 class="pt-5 text-white">Profesional experto y apasionado que brinda atención personalizada del más alto nivel en la búsqueda de tu hogar. Nuestra experiencia permitirá que tu compra o venta sea un éxito.</h5>
                        </div>
                    </div>
                        
                    <div className="row gradientesdivs shadow-drop-center">
                        
                        <div className="col-12 py-4 shadow  align-items-center border border-success">
                            <h3>Contrato de alquiler</h3>

                            <p className="lead">    Si alquilás un inmueble es mejor hacer el contrato escrito porque es más sencillo probar que el contrato de alquiler existe.
                            De todos modos, si no tenés contrato escrito, el alquiler vale igual, pero es más difícil de probar.

                            La parte locadora, que en este texto se llama locador, es la que alquila el inmueble a la parte locataria, que en este texto se llama inquilino.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row gradientesdivs shadow-drop-center my-4">
                        <div className="col-12 py-4 shadow  align-items-center border border-success">   
                            <h2>Plazos</h2>

                            <div>
                                <h4>Plazos mínimo</h4>
                                <p className="lead">El plazo mínimo del contrato de alquiler ya sea comercial o de vivienda es de 3 años. "Mínimo" quiere decir que podés pactar con el locador un plazo diferente siempre que ese plazo sea mayor a 3 años.</p>
                                
                                <h4>Excepciones al Plazo Mínimo</h4>
                                <p className="lead">No rige el plazo mínimo de 3 años en los contratos de locación destinados a:</p>
                                <div className="container">
                                    <ul class="list-unstyled lead">
                                        <li> -Sede de embajada, consulado u organismo internacional, y el destinado a habitación de su personal extranjero diplomático o consular.</li>
                                        <li> -Habitación con muebles con fines de turismo, descanso o similares. Si el plazo del contrato supera los 3 meses se presume que no fue hecho con fines turísticos.</li>
                                        <li> -Guarda de cosas.</li>
                                        <li> -Exposición u oferta de cosas o servicios en un predio ferial.</li>
                                    </ul>
                                </div>
                                <p className="lead">Tampoco se aplica el plazo mínimo de 3 años a los contratos que tengan por objeto el cumplimiento de una finalidad determinada y que debe normalmente cumplirse en un plazo menor pactado.</p>
                            </div> 
                        </div>                    
                    </div>
                    <div className="row gradientesdivs shadow-drop-center my-4">
                        <div className="col-12 py-4 shadow  border border-success">
                            <h2>Depósito en garantía</h2>
                            <p className="lead">El depósito en garantía es una suma de dinero que te pide la persona que te alquila para asegurarse de que vas a cumplir con el contrato. Por ejemplo, que vas a devolver la propiedad en el mismo estado en el que la recibiste.</p>
                            <div className="lead">
                                <p>Cuando termina el plazo del alquiler, si no hubo que hacer reparaciones, tiene que devolverte el depósito. El monto es una suma equivalente al precio del último mes de la locación, o la parte proporcional si el depósito fue inferior a un mes de alquiler.</p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            
        
        )
    }
}