
import { useState, useEffect } from "react"



import { Item } from "../../components/item/item"

export function Personagens(){
    
    const [Pers,setPers]=useState([])
    
    useEffect(()=>{
        async function fetchPers(){
            
            const data=await(await fetch("http://localhost:3000")).json()
           
            
            setPers(data)
            
        }
        fetchPers()
       
    },[])
    
  
    return(
    <>
        <h1>Personagens</h1>
       <div className="PersList">
       {Pers.map(p=>
                <Item key={p._id} name={p.name} avatar={p.avatar}  link={"/info/"+p._id}/>
                    
                
                )}
       </div>
           
        
    </>
    
    
    )
}