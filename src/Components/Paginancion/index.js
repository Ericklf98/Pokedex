import React from 'react'
import "./style.scss";
function index({prev,next,OnPrev,OnNext}) {
    const HandlePrevious=()=>{
        OnPrev();
    }
    const HandleNext=()=>{
        OnNext();
    }
    //Se realiza una condicion en la cual no se muestra nada en cada caso particular
    return (
        <div className='alinear'>
            {
                prev ?
                    <button className="boton" onClick={HandlePrevious}>Previo</button>
                :
                null
            }
            {
                next ? (
                        <button className="boton" onClick={HandleNext}>Siguiente</button>
                )
                :
                null
            }
        </div>
    )
}

export default index
