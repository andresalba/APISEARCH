import './App.css';
import { useState, useEffect } from 'react';
import Search from './components/Search';
import Result from './components/Result';

function App() {
  const [ respuesta, setRespuesta] = useState([]);//guarda el resultado de la búsqueda a la api
  const [ consulta, setConsulta] = useState('');//guarda lo consultado por el usuario en Search.js
  const [offset, setOffset] = useState(1);//contador de páginas

  const capturado = (txt) => {//funcion que recoge lo escrito por el usuario
    console.log('lo capturado en App es '+txt);
    setConsulta(txt);
  }

  const siguiente = (nxt) => {//funcion para traer la siguiente página
    setOffset((prev)=>prev+nxt)//recibe offset
    console.log('offset es '+offset);//verificar si incrementa offset
    fetch(`https://rickandmortyapi.com/api/character/?page=${offset}`).then((datos)=>{
      return datos.json();
    }).then((resp)=>{
      setRespuesta(resp.results);
      //console.log(resp.results);
    })
  }

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${offset}`).then((datos)=>{
      return datos.json();
    }).then((resp)=>{
      setRespuesta(resp.results);
      console.log(resp.results);
    })
  },[]);

  return (
    <>
      <header>
        <Search escrito={capturado} cambiar={siguiente}/>
      </header>
      {
        respuesta.filter((val)=>{
          if(consulta === '')
          {
            return <p>No results</p>
          }
          else if(val.name.toLowerCase().includes(consulta.toLowerCase()))
          {
            return val;
          }
        }).map((val)=>
          {
            return (
              <Result nombre ={val.name} foto={val.image} genero={val.gender} especie={val.species} id={val.id}/>
            );
          })
	    }
    </>
  );
}

export default App;
