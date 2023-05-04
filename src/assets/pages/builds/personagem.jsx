import {  useParams } from "react-router-dom"
import { useState , useEffect} from "react"
import { Item } from "../../components/item/item"
import { uri } from "../../../uri"
export function Personagem(props){
    const {id}=useParams()
    const [pers,setPers]=useState()
    const[infoLoaded,setInfoLoaded]=useState(false)
    const [builds,setBuilds]=useState(null)
  
    useEffect(()=>{
        async function LoadInfo() {
            
            if (!infoLoaded) { // Verifica se as informações ainda não foram carregadas
              if (props.Pers == "") {
               
                const data = await (await fetch(`${uri}/pers/${id}`)).json();
                //confirm(props.Pers=="")
                if (data!="") {
                  setPers(data[0]);
                  //console.log(data)
                  const b = await (await fetch(`${uri}/builds/${data[0]._id}`)).json();
                  if(b){
                    setBuilds(b);
                    setInfoLoaded(true); // Informações carregadas com sucesso
                  }
                  
                }
        
              } else {
                const data = props.Pers.find((p) => p._id == id);
                setPers(data);
                const b = await (await fetch(`${uri}/builds/${data._id}`)).json();
                setBuilds(b);
                setInfoLoaded(true); // Informações carregadas com sucesso
              }
            }
            
          }
            
       
      LoadInfo() 
            
        
             
        
    } ,[])
   
    return(
    <>
   
    <>
    <h1>{pers!=null && pers.name}</h1>
    <div className="PersList">
       {builds && builds.length>0? builds.map(b=>
        <Item key={b._id} name={b.nomeB} avatar={pers.avatar} link='/ficha' objeto={b} rate={b.rate} id={b._id}/>
       ):""} 
       </div>
        </>
        
   
    
    
    </>)
}