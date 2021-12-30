import React from 'react';
import Picachu from "../../imagenes/picachu.png";
import './style.scss';
function index({dato}) {
    return (
        <div className="centrar">
            <img className="redondear " src={Picachu} alt=""/>
            <h2 >Lo sentimos no encontramos el personaje:{dato}!!!</h2>
            <a href='/'>
                <button className='boton'>Regresar</button>
            </a>
            
        </div>
    )
}

export default index
