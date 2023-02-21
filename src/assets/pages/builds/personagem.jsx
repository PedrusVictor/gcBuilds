import { json, useParams } from "react-router-dom"
import { useState , useEffect} from "react"
import { Item } from "../../components/item/item"
export function Personagem(){
    const {id}=useParams()
    const [pers,setPers]=useState()
    const [loading,setLoading]=useState(true)
    const [builds,setBuilds]=useState(null)
    
    useEffect(()=>{
        async function LoadInfo(){
            const data= await (await fetch(`http://localhost:3000/${id}`)).json()
            
            setPers(data[0])
            const b=await (await fetch(`http://localhost:3000/builds/${data[0].name}`)).json()
            setBuilds(b)
            
            setLoading(false)
        }
        
            LoadInfo() 
        
         
        
    } ,[])
    
    return(
    <>
    {loading?(<h1>Loading...</h1>)
    :(<>
    <h1>{pers.name}</h1>
       { builds.length>0? builds.map(b=>
        <Item key={b._id} name={b.nomeB} avatar={b.personagem.avatar} link='/ficha' objeto={b} />
       ):""} 
        </>
        
    )}
    
    
    </>)
}