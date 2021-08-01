import './Search.css';
import { useEffect, useState } from 'react';

function Search(props) {//hay que ponerle props por que le lleha la función traer desde pasarTraer de App.js
  
    const [busqueda, setBusqueda] = useState('');//variable que guarda lo escrito en el campo de búsqueda
    const [respuesta, setRespuesta] = useState([]);//variable que guarda lo consultado por la base de datos

    useEffect( async () => { //consulta la base de datos a penas renderiza la página
        const data = await fetch('https://rickandmortyapi.com/api/character/?page=2');
        const datos = await data.json();
        console.log('la consulta a la base de datos desde Search.js es', datos);
        setRespuesta(datos.results);//entrega un objeto y seleccionamos el array results que es interno 
    },[]);//por esta línea solo lo hace una vez

    const captura = (e) => {//esto captura lo escrito en input text y lo mete en busqueda
        setBusqueda(e.target.value);//guardamos en busqueda lo escrito
        console.log("el valor capturado input es ", busqueda);
    }

    const filtrarResultados = (e) => {//esto toma lo capturado en busqueda, y filtra datos y lo manda al parent
        let filtro = [];//variable para guardar lo filtrado
        for(var i=0; i<respuesta.length; i++){//metemos en el array filtro 
            if(respuesta[i].name === busqueda){//lo que sea igual a busqueda
                filtro.push(respuesta[i]);
            }
        }
        props.pasarTraer(filtro);//esto pasa el resultado filtrado al parent
      }

    return (        

        <div className="cont">
			<input type="text" placeholder="texto" onChange={captura} className="texto" />
			<input type="image" src="lupa.png" alt="lupa" onClick={filtrarResultados} className="lupa" />
		</div>

    );
}

export default Search;

/*
Notas: 
Esta función envía los resultados de la búsqueda a su parent que es App.js
La base de datos viene de la página: https://rickandmortyapi.com/documentation
*/