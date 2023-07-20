import './Result.css';

function Result(props) {//acá se recibe lo enviado desde App.js
  
    return (

        <div className="results">
            <div className="results-cont">
                <img className="results-foto" src={props.foto} alt="foto" />
                <h1 className="results-nombre">{props.nombre}</h1>
                <p className="results-info1">Gender: {props.genero}</p>
                <p className="results-info2">Species: {props.especie}</p>
            </div>
        </div>

    );
}

export default Result;

/*
Notas: 
Acá llega la información enviada a App.js por Search.js y es entregada mediante los props
*/