import {useState,useEffect} from "react";
export const Api=(url)=>{//Aqui consumimos la api de pokemon
    const[pokemon,setPokemon]=useState({load:true,datos:null});
    useEffect(()=>{
        ObtenerDatos(url)
    },[url]);
    async function ObtenerDatos(url){
        try{
            setPokemon({load:true,datos:null})
            const x=await fetch(url)
            const datos=await x.json()
            setPokemon({load:false,datos})
        }catch(e){
            console.log(e);
        }
        
    } 
    return pokemon;
}