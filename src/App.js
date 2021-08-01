import Search from './components/Search'
import Results from './components/Results'
import './App.css';
import { useState } from 'react';

function App() {

  const [consultados, setConsultados] = useState();

  const traer = (traido) => {
    console.log('lo traido de la base de datos a App.js es', traido);
    setConsultados(traido[0]);
  }

  return (
    <div className="App">
      <Search pasarTraer={traer} />
      {consultados === undefined ? <p className="App-not">No hay resultado</p> :
        <Results nombre ={consultados.name} foto={consultados.image} genero={consultados.gender} especie={consultados.species} id={consultados.id}/>
      }
      </div>
  );
}

export default App;

/*
Notas: 
Esta línea <Search pasarTraer={traer} /> trae la información desde el componente Search
La funcion traer es llamada mediante pasarTraer en Search.js
id se consulta pero no se usa en Results.js
*/