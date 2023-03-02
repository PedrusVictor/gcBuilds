import React from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom'
import { Selo } from "../../selo";
import './ficha.css'
export function Ficha  () {
  const { state } = useLocation();
  const timeR=state.timeR
  const [selos,setSelos]=useState(state.selo)
  const skills=state.upSkills.map(skill=> state.personagem.skills[skill][0])
  return (
    
<div className="ficha">

  <div className="personagem-container">
    <img className="imgbg" src="https://i.imgur.com/85duhdG.png"/>
    <div style={{display:"flex",flexDirection:"row"}}>
      <img src="https://i.imgur.com/d1myBrQ.jpg" style={{border:"3px solid #b84e4e",borderRadius:"5px"}}/>
      <div className="pers-item" style={{marginLeft:"3%"}}>
        <div style={{display:"flex"}}>
          <label className="item-name">Amy Plie(t)</label>
          <img className="iconType" src="https://i.imgur.com/GcoK8Yh.png"/>
        </div>
        
        <label className="item-name buildN">Build Doida</label>
      </div>
    </div>
    <div className="pers-item">
      <label className="item-name">Equipamentos</label>
      <div className="item-content"></div>
    </div>
    <div className="pers-item">
      <label className="item-name">Acessórios</label>
      <div className="item-content"></div>
    </div>
    <div className="pers-item">
      <label className="item-name left">Sub Atributos</label>
      <div className="item-content"></div>
    </div>
    <div className="pers-item chaser">
      <label className="item-name">Chaser</label>
      <div className="item-content"></div>
    </div>
    
    <div className="pers-item">
      <label className="item-name left">Espec de Lvl</label>
      <div className="item-content"></div>
    </div>
    
    <div className="pers-item selo">
      <label className="item-name">Selo</label>
      <div className="item-content"></div>
    </div>
    
    <div className="pers-item" style={{gridRow:4}}>
      <label className="item-name left">Encantamentos</label>
      <div className="item-content"></div>
    </div>
    <div className="pers-item" style={{gridColumn:1}}>
      <label className="item-name left">Skill Ups</label>
      <div className="item-content"></div>
    </div>
    <div className="pers-item" style={{gridColumn:1}}>
      <label className="item-name left">Time Recomendado</label>
      <div className="item-content"></div>
    </div>


  </div>
  
</div>  



  
  );
};

