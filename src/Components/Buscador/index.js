import React,{useState} from "react";
import "./style.scss";
const Buscador=({OnSearch})=>{
    const[dato,setDato]=useState('');
    const HandleClick=()=>{
        OnSearch(dato.toLowerCase());
        /*el dato digitado por el usuario se pasa a minusculas
         debido a que la api solo acepta el nombre del pokemon 
         minusculas de lo contrario mandara un error
         */
    }
    return(
        <div className="buscar">
            <input  onChange={({target:{value}})=>setDato(value)} placeholder="Buscar Pokemon"/>
            <button onClick={()=>{HandleClick()}}>Buscar</button>
        </div>
    )
}
export default Buscador;