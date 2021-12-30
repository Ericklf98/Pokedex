import React from "react";
import {Api} from '../../Consumo Api/Api';
import "./style.scss";
const Tarjeta=({item,validar})=>{
    var dat,load,datos;
    if(validar){
         dat=Api(item);//se manda a llamar a la funcion obtner datos la cual nos devolvera los datosespecificos de cada pokemon
         load=dat.load;
         datos=dat.datos;
    }else{
        load=item.load;
        datos=item.data;
    }
    return(
        <div className="contenedor">
            {//se realiza un if para comrpobar si ya contamos con los datos
                load?//si load es true significa que aun no tenemos los datos de los pokemon
                null
                ://sabemos que load el false por lo cual ya contamos con los datos que tenemos que mostrar
                <div className='card'>
                    <div className="head">
                        <div className="circulo">
                            
                        <h5 className="especial">#{datos.order}</h5>
                            <div className="img">
                                <img src={datos.sprites.other.dream_world.front_default} alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div className="cuerpo">
                        <h4>{datos.name}</h4>
                        {
                            datos.types.map((item,id)=>{
                                return<div key={id}><h5>{item.type.name}</h5></div>
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}
export default Tarjeta;