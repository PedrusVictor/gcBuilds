import './time.css'
import { useState,useEffect } from 'react'
import { uri } from '../../../uri'
import { Authenticate } from '../../auth/authenticate'
export function Time(props){

    const [personagens,setPersonagens]=useState(props.pers) 
    const [time,setTime]=useState([])
    const[rate,setRate]=useState(0)
    const [pet,setPet]=useState(props.pet)
    
    useEffect(()=>{
        async function LoadInfo(){
            setRate(props.comp.rate)
            const data=personagens||await(await(fetch(uri))).json()
            
            setPersonagens(data)

            const comp=props.comp.time.map(pers=>data.find(p=>p._id==pers))
            setTime(comp)
        }
        LoadInfo()
    },[])

    const LikeAndDislike=(valor)=>{
        if(rate+valor>-1){
            
            setRate(prev=>prev+valor)
           props.update(props.comp._id,rate)
        
        }
    }
    
    return(
        <div className='CompContainer'>
            <div className='compP'>
            {time.map((p,index)=><img key={props.comp._id+index+props.comp.content_id} className="iconOpt" src={p.avatar} />)}
            <img src={pet.avatar} className="iconOpt"/>
            </div>
            
            <label>{props.comp.name}</label>
            <label>Rating : {rate}
            
            </label>
            
            {Authenticate()?<div className='rateContaine'>
            
            <button onClick={()=>LikeAndDislike(1)}><img className='likeR' src="https://i.imgur.com/M6R0SBS.png" /></button>
            <button onClick={()=>LikeAndDislike(-1)}><img className='likeR' src="https://i.imgur.com/IwbHdwl.png" /></button>
            </div>:""}
            
        </div>
    )
}