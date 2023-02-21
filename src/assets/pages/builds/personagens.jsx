
import { useState, useEffect } from "react"



import { Item } from "../../components/item/item"
import { Link } from 'react-router-dom'
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
        <div style={{display:"flex"}}>
            <h1>Personagens</h1>
            <h1 style={{marginLeft:"10px"}}><Link to="/builds"> Criar Build </Link></h1>
        </div>
       <div className="PersList">
       {Pers.map(p=>
                <Item key={p._id} name={p.name} avatar={p.avatar}  link={"/info/"+p._id}/>
                    
                
                )}
       </div>
           
        
    </>
    
    
    )
}