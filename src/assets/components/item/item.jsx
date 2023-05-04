import './item.css'
import {useNavigate } from "react-router-dom"
import { uri } from '../../../uri';
import { Authenticate } from '../../auth/authenticate';
import { useState } from 'react';
export function Item(props){
   const navigate=useNavigate()
   const [rate,setRate]=useState(props.rate)
   function UpdateRate(id,valor){

        if(props.rate+valor>-1){
            
                setRate(prev=>prev+valor)
               //props.update(props.comp._id,rate)
               fetch(`${uri}/builds/update/${id}/${valor}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id:id,valor:valor})
                })
            
            .then(response=>response.json())
            .then(data=>{navigate("/contents")})
            .catch(error => console.error(error));
            }
        
        
    }
    return(
        
            <div className='item' onClick={()=>props.objeto?navigate('/ficha',{state:props.objeto}) : navigate(props.link )}>
                
                    <img src={props.avatar}/>
                   <label >
                    {props.name}
                    </label> 
                    {props.rate?(<label>Rating:{props.rate}</label>):""}
                    {Authenticate()?<div className='rateContaine'>
            
            <button onClick={()=>UpdateRate(1)}><img className='likeR' src="https://i.imgur.com/M6R0SBS.png" /></button>
            <button onClick={()=>UpdateRate(-1)}><img className='likeR' src="https://i.imgur.com/IwbHdwl.png" /></button>
            </div>:""}
                
                
            </div>
        
    )
}