
import "./clima.css"
import { useState } from "react";

const api = {
  key: "407c070889b62f49985c8d1ce78ae0dd",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Clima() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (

    
    <div className="conteiner   align-items-center justify-content-center">
        <div className="container-fluid">
            <div className="row p-4 m-5 text-center">
                <div className="col-12 col-sm-6 mx-auto">               
                    <h1 className="texto m-5">Pablo M.<span className="segunda-linea texto"> Nösinger</span></h1>
                    <h5 className="pt-5 text-white">Profesional experto y apasionado que brinda atención personalizada del más alto nivel en la búsqueda de tu hogar. Nuestra experiencia permitirá que tu compra o venta sea un éxito.</h5>
                </div>
            </div>
        </div>

        <header className="App-header rounded shadow m-5">
            <h1>Consulte Clima</h1>
            <div>
                <input
                    type="text"
                    className="rounded"
                    placeholder="Ingrese un lugar"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={searchPressed} className="btn btn-danger px-4 m-2 font-weight-bold shadow-drop-center">Buscar</button>
            </div>

        {typeof weather.main !== "undefined" ? (
          <div className="">
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : ("")}
      </header>
    </div>
  );
}

export default Clima;
