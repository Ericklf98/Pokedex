import React from "react";
import Tarjeta from './Tarjeta';
import "./style.scss";
const Index=({pokemon=[]})=>{
    /*pokemon tiene los datos que obtuvimos al consultar la API los cuales son name 
    y url del pokemon dicha url es para consultar los datos especificos de cada pokemon*/
    var validar=true;
    /**esta validación es para determinar si los datos que trae pokemon son datos generelas
     * o es un solo personaje en especifico de ser un solo personaje validar sera true
     * con esto se evitaria mandarlo a la función map debido a que es la información de un solo personaje
     * dicha información viene como tipo objeto
     */
    if(!Array.isArray(pokemon) && (pokemon.length!==0 ||pokemon.length!==undefined )){
        if(pokemon.data.results===undefined && pokemon.data.abilities!==undefined){
            validar=false;
        }else{
            validar=true;
        }
    }
    return(
        <div className="posicion">
            {validar?
                pokemon.data.results?.map((item,index)=>(
                    <div key={index} >
                        <Tarjeta item={item.url} validar={validar}/>
                    </div>
                ))
                :<Tarjeta item={pokemon}  validar={validar}/>
            }
        </div>
    )
}
export default Index;