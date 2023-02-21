import './selo.css'
import { useState } from 'react'
export function Selo(props){
    const selo=[[
        {"name": "Núcleo da Memória", "is_main": "true", "icon": "https://i.imgur.com/cYHdoio.png", "number": 1, "children": "null", "max_points": 5},
        {"name": "Talento de Herói I", "is_main": "false", "icon": "https://i.imgur.com/WECDBbf.png", "number": 1, "children": 1, "max_points": 5},
        {"name": "Respiração Crescente", "is_main": "false", "icon": "https://i.imgur.com/Aw16Og5.png", "number": 2, "children": 1, "max_points": 5},
        {"name": "Mente Preparada", "is_main": "false", "icon": "https://i.imgur.com/WtZ8QJn.png", "number": 3, "children": 1, "max_points": 5},
        {"name": "Talento de Herói I2", "is_main": "false", "icon": "https://i.imgur.com/WECDBbf.png", "number": 4, "children": 1, "max_points": 5}, 
        {"name": "Selo da Memória", "is_main": "false", "icon": "https://i.imgur.com/Ptweawy.png", "number": 5, "children": 1, "max_points": 5},
        {"name": "Aventureiro Veterano Abrir", "is_main": "false", "icon": "https://i.imgur.com/XXGKpFO.png", "number": 6, "children": 1, "max_points": 5},
        {"name": "Poder Selado na Alma", "is_main": "false", "icon": "https://i.imgur.com/8NpgAgs.png", "number": 7, "children": 1, "max_points": 5}, 
        {"name": "Defesa de Golpe Crítico", "is_main": "false", "icon": "https://i.imgur.com/vwGOITZ.png", "number": 8, "children": 1, "max_points": 5}, 
        {"name": "Caçada a Chefes", "is_main": "false", "icon": "https://i.imgur.com/RJxYdnl.png", "number": 9, "children": 1, "max_points": 5}, 
    ],[
        {"name": "Núcleo do Corpo", "is_main": "true", "icon": "https://i.imgur.com/IeLiXpa.png", "number": 2, "children": "null", "max_points": 5},
        {"name": "Ascenção", "is_main": "false", "icon": "https://i.imgur.com/3vpUT5a.png", "number": 1, "children": 2, "max_points": 5}, 
        {"name": "Conexão Maximizada", "is_main": "false", "icon": "https://i.imgur.com/N8mUeMY.png", "number": 2, "children": 2, "max_points": 5}, 
        {"name": "Ativador de Maximização", "is_main": "false", "icon": "https://i.imgur.com/q0D5u7a.png", "number": 3, "children": 2, "max_points": 5}, 
        {"name": "Talento de Herói II", "is_main": "false", "icon": "https://i.imgur.com/f9YcUjZ.png", "number": 4, "children": 2, "max_points": 5}, 
        {"name": "Selo do Corpo", "is_main": "false", "icon": "https://i.imgur.com/PO85Ocl.png", "number": 5, "children": 2, "max_points": 5}, 
        {"name": "Concentração Avançada", "is_main": "false", "icon": "https://i.imgur.com/VndmQAL.png", "number": 6, "children": 2, "max_points": 5}, 
        {"name": "Determinação Unida", "is_main": "false", "icon": "https://i.imgur.com/EsKbJy4.png", "number": 7, "children": 2, "max_points": 5}, 
        {"name": "Evitar Ameaças", "is_main": "false", "icon": "https://i.imgur.com/hZCjNqR.png", "number": 8, "children": 2, "max_points": 5}, 
        {"name": "Pacto de Batalha Sangrenta", "is_main": "false", "icon": "https://i.imgur.com/kqjSxV3.png", "number": 9, "children": 2, "max_points": 5}, 
    ],[
        {"name": "Núcleo da Alma", "is_main": "true", "icon": "https://i.imgur.com/ZEpZfeA.png", "number": 3, "children": "null", "max_points": 5}, 
        {"name": "Talento de Herói II", "is_main": "false", "icon": "https://i.imgur.com/Hxld8vC.png", "number": 1, "children": 3, "max_points": 5}, 
        {"name": "Equilíbrio", "is_main": "false", "icon": "https://i.imgur.com/1PSbE2o.png", "number": 2, "children": 3, "max_points": 5}, 
        {"name": "Resistência", "is_main": "false", "icon": "https://i.imgur.com/LlsWe6w.png", "number": 3, "children": 3, "max_points": 5}, 
        {"name": "Alma Carregada", "is_main": "false", "icon": "https://i.imgur.com/z2gasPu.png", "number": 4, "children": 3, "max_points": 5}, 
        {"name": "Selo da Alma", "is_main": "false", "icon": "https://i.imgur.com/wOvTlZC.png", "number": 5, "children": 3, "max_points": 5}, 
        {"name": "Concentração Avançada", "is_main": "false", "icon": "https://i.imgur.com/urFF7Bg.png", "number": 6, "children": 3, "max_points": 5}, 
        {"name": "Pistas da Caçada I", "is_main": "false", "icon": "https://i.imgur.com/uUEAuco.png", "number": 7, "children": 3, "max_points": 5}, 
        {"name": "Derrubando Muralhas", "is_main": "false", "icon": "https://i.imgur.com/eSqRHbs.png", "number": 8, "children": 3, "max_points": 5}, 
        {"name": "Pistas da Caçada II", "is_main": "false", "icon": "https://i.imgur.com/HQFujzo.png", "number": 9, "children": 3, "max_points": 5}
    ]]
    
    const updateSelo=(v,index)=>{

        const nArray=[...props.selo]
        const pont=parseInt(v)<6? parseInt(v):5
        
        if((props.pontos+(pont-nArray[index]))<91){
            props.setPontos(props.pontos+(pont-nArray[index]))
            nArray[index]=pont
            
            props.setSelo(nArray)
        }
            

    }
    return (
    <div className="Selo">
       {selo.map((sel,index)=>(
        <div key={index}>
           <label>{sel[0].name}</label>
            <div className="seloContent">
                
                {sel.slice(1).map((s,i)=>
                
                
                    (
                    
                    
                        (<div className='seloBlock' key={i}>
                            <img src={s.icon} title={s.name}/>
                            {props.read?
                            <input type="number" min="0" max={s.max_points} value={props.selo[(index*9)+i] } onChange={e=>updateSelo(e.target.value,((index*9)+i))} readOnly/>
                            :<input type="number" min="0" max={s.max_points} value={props.selo[(index*9)+i] } onChange={e=>updateSelo(e.target.value,((index*9)+i))}/>}
                            
                            
                        </div>) 
                        
                       
                    
                )
                    
                )}
            </div>
        </div>
       ))} 
       
    </div>
    )
}
 
    
    
    
