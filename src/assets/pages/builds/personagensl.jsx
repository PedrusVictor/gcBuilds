
import { useState, useEffect } from "react"
import { uri } from "../../../uri"


import { Item } from "../../components/item/item"
import { Link } from 'react-router-dom'
export function Personagensl(props){
    
    const [Pers,setPers]=useState(props.Pers)
    
    useEffect(()=>{
        async function fetchPers(){
            
            //const data=await(await fetch("http://localhost:3000")).json()
            const data=await(await fetch(uri)).json()
            
            setPers(data)
            
        }
            
            
            if(Pers!=null){
                
                fetchPers()
            }   
        
       
    },[])
    
  
    return(
    <>
        
       <div className="PersList">

       {Pers && Pers.map(p=>
                <Item key={p._id} name={p.name} avatar={p.avatar}  link={"/info/"+p._id}/>
                    
                
                )}
       </div>
           
        
    </>
    
    
    )
}