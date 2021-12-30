import React from "react";
import "./style.scss";
import Titulo from '../../imagenes/titulo.png'
const Navbar=()=>{
    return(
        <nav>
            <a href="/">
            <img src={Titulo} alt=".."/>
            </a>
           
        </nav>
        
    )
}
export default Navbar;