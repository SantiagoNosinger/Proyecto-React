
import './App.css';



import {Routes, Route, BrowserRouter as Router} from "react-router-dom";

import Menu from './componentes/Menu' ;
import Inicio from './paginas/inicio';
import Ventas from './paginas/Ventas'
import Alquileres from './paginas/Alquileres';
import Informacion from './paginas/Informacion'
import Contacto from './paginas/ContactoPaginas'
import Clima from './paginas/Clima'


function App() {
  return (
     
    <div className="container ">
      <Menu/>
        
      <Router>  
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/alquileres.web' element={<Alquileres/>}/>
          <Route path='/ventas.web' element={<Ventas/>}/>
          <Route path='/informacion.web' element={<Informacion/>}/>
          <Route path='/contacto.web' element={<Contacto/>}/>
          <Route path='/clima.web' element={<Clima/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
