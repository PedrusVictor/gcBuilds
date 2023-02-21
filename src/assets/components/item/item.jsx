import './item.css'
import {useNavigate } from "react-router-dom"

export function Item(props){
   const navigate=useNavigate()

   
    return(
        
            <div className='item' onClick={()=>props.objeto?navigate('/ficha',{state:props.objeto}) : navigate(props.link )}>
                
                    <img src={props.avatar}/>
                   <label >
                    {props.name}
                    </label> 
                
                
            </div>
        
    )
}