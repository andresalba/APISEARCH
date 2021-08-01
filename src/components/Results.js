import './Results.css';

function Results(props) {//acá se recibe lo enviado desde App.js
  
    return (

        <div className="results">
            <div className="results-cont">
                <img className="results-foto" src={props.foto} alt="foto" />
                <h1 className="results-nombre">{props.nombre}</h1>
                <p className="results-info1">Genero: {props.genero}</p>
                <p className="results-info2">Especie: {props.especie}</p>
            </div>
        </div>

    );
}

export default Results;

/*
Notas: 
Acá llega la información enviada a App.js por Search.js y es entregada mediante los props
*/