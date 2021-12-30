//código elaborado por erick gerardo lópez fernóndez
import React,{useState,useEffect} from "react";
import { Fragment } from "react/cjs/react.production.min";
import Carta from './Components/Cartas/index';
import Buscador from "./Components/Buscador";
import Paginacion from "./Components/Paginancion/index"
import Icono from "./Components/IconoFlotante";
import Error from "./Components/Error/index"
import Navbar from "./Components/Nabvar";
import "./app.scss";
function App() {
  var bandera=false;
  const[dato,setDato]=useState("")
  const[prev,setPrev]=useState("");
  const[next,setNext]=useState("");
  const[pokemon,setPokemon]=useState({load:true,data:null});
  const url='https://pokeapi.co/api/v2/pokemon?limit=10'
  const ObtenerDatos=(u)=>{//consumo API REST
    setPokemon({load:true,data:null})
    fetch(u)
    .then(x=>x.json())
    .then(data=>{
      setPrev(data.previous)
      setNext(data.next)
      setPokemon({load:false,data})
    })
    .catch(err=>console.log('el error',err));
  }
  const OnPrev=()=>{
    ObtenerDatos(prev);
  }
  const OnNext=()=>{
    ObtenerDatos(next);
  }
  const OnSearch=(name)=>{
    if(name!==""){//este condicional se evalua que si el usuario si digito algo en Search realice el código
      var urlpokemon=`https://pokeapi.co/api/v2/pokemon/${name}`;
      setDato(name);
      setNext(null);
      ObtenerDatos(urlpokemon);
    }
    
  }
  useEffect(()=>{
    ObtenerDatos(url)//se manda a llamar la función que consumira nuestra api
  },[]);
  if(pokemon.data===null && prev===null  && next===null && pokemon.load===true){
    bandera=true;
  }
  //aqui desplegaremos todos los componentes ya creados
  return (
   <Fragment>
      <Navbar/>
       <Buscador OnSearch={OnSearch}/>
       <Paginacion prev={prev} next={next} OnPrev={OnPrev} OnNext={OnNext}/>
      {bandera ? <Error dato={dato}/> :  pokemon.load ?null:<Carta pokemon={pokemon}/>}
       <Icono/>
   </Fragment>
  );
}

export default App;
