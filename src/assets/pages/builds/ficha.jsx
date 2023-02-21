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
    <div className="personagem-container">
        {/*<img className="bg"  src="https://img.koggames.com/ES/microsite/2022/0525/luciel-4th-path/preview-emptiness.png"/>*/}
        <img className="bg"  src={state.personagem.image}/>
        <h1 className="personagem-nome">{state.nomeB}</h1>
        <h2 className="personagem-nome">{state.personagem.name}</h2>
      <div className="personagem-informacoes">
        <div className="personagem-linha">
          <div className="personagem-coluna">
            <span className="personagem-label">Equipamento:</span>
            {/**<span className="personagem-valor"> {state.equip} </span> */}
            <div>{state.equip}</div>
          </div>
          <div className="personagem-coluna">
            <span className="personagem-label">Encantamentos:</span>
            <div> {state.enc} </div>
          </div>
          <div className="personagem-coluna">
            <span className="personagem-label">Acessórios:</span>
            <div>{state.accs}</div>
          </div>
        </div>


        <div className="personagem-linha">
          <div className="personagem-coluna">
            <span className="personagem-label">Especialização de lvl:</span>
            <div>{state.espLvl}</div>
          </div>
          <div className="personagem-coluna">
            <span className="personagem-label">Skill Upgrades:</span>
            <div>
            {skills.map(skill=>(<img key={skill.name} src={skill.image} title={skill.name} />))}
            </div>
           
          </div>
          
        </div>

        <div className="personagem-linha">
          <div className="personagem-coluna">
            <span className="personagem-label">Chaser:</span>
            <div>
              {state.chaser.map((c,index)=>(<div key={index}><img src={c.icon} className="iconOpt" /><label> x {c.value}</label></div>)) }

            </div>
          </div>
          <div className="personagem-coluna">
            <span className="personagem-label">Selo:</span>
            <Selo selo={selos} setSelo={setSelos} />
          </div>
          <div className="personagem-coluna">
            <label>Time Recomendado:</label>
            <div>
            {timeR.map((p,index)=><img key={index} src={p.avatar}  className="iconOpt" read="true"/>)}
            </div>
            
          </div>
        </div>

        
        
      </div>
      
    </div>
  );
};

