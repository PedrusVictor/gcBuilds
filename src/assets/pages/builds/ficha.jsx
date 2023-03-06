import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Selo } from "../../selo";
import { Chaser } from "../../chaser";
import {encantamentos as en,subAtributos as sub,espLvl as esp,equipamentos as eqps,accessorios as ac,type}from "../../utils"
import { uri } from "../../../uri";
import './ficha.css'
export function Ficha  (props) {
  const [personagens,setPersonagens]=useState()
  const { state } = useLocation();
 
  const [selos,setSelos]=useState(state.selo)
  const [personagem,setPersonagem]=useState()
  const [timeR,setTimeR]=useState([])
  ///const skills=state.upSkills.map(skill=> state.personagem.skills[skill][0])



    

  useEffect(()=>{


    async function loadInfo(){
      const id=state.personagem
      const data=await(await fetch(uri)).json()
      
      setPersonagens(data)
      
      
      const pers=await data.find(p=>p._id && p._id==id)
      const time=state.timeR.map(p=>data.find(s=> s._id==p))
      setTimeR(time)
      setPersonagem(pers)
    }
    
    loadInfo()
    
  },[])

 
  return (
   
<div className="ficha">
{personagem?
  <div className="personagem-container">
    <img className="imgbg" src={personagem.image}/>
    <div className="topoFicha">
      <img src={personagem.avatar} style={{border:"3px solid #b84e4e",borderRadius:"5px"}}/>
      <div className="pers-item" style={{marginLeft:"3%"}}>
        <div style={{display:"flex"}}>
          <label className="item-name">{personagem.name} </label>
          <img className="iconType" src={type[personagem.type]}/>
        </div>
        
        <label className="item-name buildN">{state.nomeB}</label>
      </div>
    </div>
    <div className="pers-item">
      <label className="item-name">Equipamentos</label>
      <div className="item-content">
        {state.equip.map(
          (e)=>< img key={e} src={eqps[e].icon} className="iconOpt" title={eqps[e].name}/>
        )}
      </div>
    </div>
    <div className="pers-item">
      <label className="item-name">Acessórios</label>
      <div className="item-content">
          {state.accs.map((acc,index)=>< img key={acc+" "+index} src={ac[index][acc].icon} className="iconOpt" title={ac[index][acc].name}/>)}

      </div>
    </div>
    <div className="pers-item">
      <label className="item-name left">Sub Atributos</label>
      <div className="item-content left">
      {state.subAt.map((s,index)=><div key={s+" "+index} style={{display:"flex",alignItems:"center"}}><img key={s+"/"+index} src={sub[index][s].icon}  className="iconAt"/><label className="item-content">{sub[index][s].name}</label></div> )}

      </div>
    </div>
    
    
    <div className="pers-item" style={{gridColumn:1}}>
      <label className="item-name left" >Espec de Lvl</label>
      <div className="item-content left">
      {state.espLvl.map((s)=><img key={s} src={esp[s].icon} title={esp[s].name} className="iconOpt"/> )}
      </div>
    </div>
    
    
    
    <div className="pers-item" style={{gridRow:4}}>
      <label className="item-name left">Encantamentos</label>
      <div className="item-content left">
        {state.enc.map((e,index)=><div key={e+" "+index}>
        <img key={e+" "+index} src={en[index][e].icon} className="iconAt" title={en[index][e].name}/>
        <label className="item-content">{en[index][e].name}</label>
        </div>
        )}
      </div>
    </div>
    <div className="pers-item" style={{gridColumn:1}}>
      <label className="item-name left">Skill Ups</label>
      <div className="item-content left">
        {state.upSkills.map(s=><img key={s} src={personagem.skills[s][0].image}  className="iconOpt" title={personagem.skills[s][0].name}/>)}
      </div>
    </div>


    <div className="pers-item chaser">
      <label className="item-name">Chaser</label>
      <div className="item-content" style={{display: "flex",justifyContent:"center",flexWrap:"wrap"}}>

        {state.chaser.map(c=><div key={"chaser"+c.id}><img key={"chaser"+c.id} src={Chaser[c.id].icon} className="iconOpt"/> x <label className="item-content">{c.value}</label></div>)}

      </div>
    </div>

    <div className="pers-item selo">
      <label className="item-name">Selo</label>
      <div className="item-content">
      <Selo selo={selos} setSelo={setSelos} />

      </div>
    </div>



    <div className="pers-item" style={{gridColumn:1}}>
      <label className="item-name left">Time Recomendado</label>
      <div className="item-content">
        {timeR.map(p=>
        <img key={"timeR"+p.name} src={p.avatar} title={p.name} className="iconOpt"/>)}
      </div>
    </div>


  </div>
:""} 
  
  
</div>  



  
  );
};

