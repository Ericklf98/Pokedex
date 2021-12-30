import React from "react";
import "./style.scss";
import Pokebola from '../../imagenes/Pokebola.png'
const Icono=()=>{
    return(
        /*al presionar el boton este nos redireccionara hacia la parte de arriba de la pagina*/
        <button className="icono" onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}}>
            <img src={Pokebola} alt=".."/>
        </button>
    )
}
export default Icono;