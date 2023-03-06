import {  useParams } from "react-router-dom"
import { useState , useEffect} from "react"
import { Item } from "../../components/item/item"
import { uri } from "../../../uri"
export function Personagem(props){
    const {id}=useParams()
    const [pers,setPers]=useState(((props.Pers).find(p=>p._id==id)))
    
    const [builds,setBuilds]=useState(null)
  
    useEffect(()=>{
        async function LoadInfo(){
            
           
            //const data= await (await fetch(`http://localhost:3000/${id}`)).json()
            const data=pers ==null? (await (await fetch(`${uri}/${id}`)).json())[0]:pers
            
            //const data= await (await fetch(`${uri}/${id}`)).json()
            setPers(data)
            //const b=await (await fetch(`http://localhost:3000/builds/${data[0].name}`)).json()

            //const b=await (await fetch(`${uri}/builds/${data.name}`)).json()
            const b=await (await fetch(`${uri}/builds/${data._id}`)).json()
            setBuilds(b)
            
           
        }
            
          
        LoadInfo()      
        
    } ,[])
    
    return(
    <>
   
    <>
    <h1>{pers!=null && pers.name}</h1>
       {builds && builds.length>0? builds.map(b=>
        <Item key={b._id} name={b.nomeB} avatar={pers.avatar} link='/ficha' objeto={b} />
       ):""} 
        </>
        
   
    
    
    </>)
}