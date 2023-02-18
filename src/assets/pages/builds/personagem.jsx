import { useParams } from "react-router-dom"
import { useState , useEffect} from "react"
import { Builds } from "./builds"
export function Personagem(){
    const {id}=useParams()
    const [pers,setPers]=useState()
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        async function LoadInfo(){
            const data= await (await fetch(`http://localhost:3000/${id}`)).json()
            
            setPers(data[0])
            setLoading(false)
        }
        
        LoadInfo()
        
    } ,[])
    
    return(
    <>
    {loading?(<h1>Loading...</h1>)
    :(<>
    <h1>{pers.name}</h1>
        <Builds pers={pers}/>
        </>
        
    )}
    
    <h1></h1>
    </>)
}