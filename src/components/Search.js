import './Search.css';
import { useState} from 'react';

function Search(props) {
    const [ btn, setBtn] = useState(false);
    const [ busqueda, setBusqueda] = useState('');//lo buscado por el usuario se envia a App

    const captura = (e) => { //funcion para capturar la busqueda
        setBusqueda(e.target.value);//guardamos lo escrito
    }

    const  lupa = (e) => { //funcion para enviar el resultado y aparecer el btn next
        e.preventDefault();//prevenir que el form mande al servidor
        props.escrito(busqueda);//enviar busqueda a App
        setBtn(true);//mostrar el boton de siguiente
    }

    const sigui = () => {
        props.cambiar(1);//aumentar en App.js offset en uno  
    }

    return (        
        <>
            <h1>Search a Rick and Morty character</h1>
            <div className="searchCont">
                <form className="cont" onSubmit={lupa}>
                    <input type="text" placeholder="texto" className="texto" onChange={captura}/>
                    <input type="image" src={process.env.PUBLIC_URL + "//lupa.png"} alt="lupa" className="lupa"/>
                </form>
                { btn == true && <button className="nxt" onClick={sigui}>NEXT</button> }
            </div>
        </>
    );
}

export default Search;