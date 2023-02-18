import React from "react";
import './ficha.css'
export function Ficha  () {
  return (
    <div className="personagem-container">
        <img className="bg" src="https://img.koggames.com/ES/microsite/2022/0525/luciel-4th-path/preview-emptiness.png"/>
        <h1 className="personagem-nome">nome build</h1>
        <h2 className="personagem-nome">nome</h2>
      <div className="personagem-informacoes">
        <div className="personagem-linha">
          <div className="personagem-coluna">
            <span className="personagem-label">Equipamento:</span>
            <span className="personagem-valor">cor eqp</span>
          </div>
          <div className="personagem-coluna">
            <span className="personagem-label">Encantamentos:</span>
            <span className="personagem-valor">Encantamentos </span>
          </div>
          <div className="personagem-coluna">
            <span className="personagem-label">Acessórios:</span>
            <span className="personagem-valor">Acessórios resposta</span>
          </div>
        </div>


        <div className="personagem-linha">
          <div className="personagem-coluna">
            <span className="personagem-label">Especialização de lvl:</span>
            <span className="personagem-valor">esp</span>
          </div>
          <div className="personagem-coluna">
            <span className="personagem-label">t3:</span>
            <span className="personagem-valor">up t3 </span>
          </div>
          <div className="personagem-coluna">
            <span className="personagem-label">t6:</span>
            <span className="personagem-valor">up t6</span>
          </div>
        </div>

        <div className="personagem-linha">
          <div className="personagem-coluna">
            <span className="personagem-label">Chaser:</span>
            <span className="personagem-valor">resposta chaser</span>
          </div>
          <div className="personagem-coluna">
            <span className="personagem-label">Selo:</span>
            <span className="personagem-valor">resposta selo</span>
          </div>
          <div className="personagem-coluna">
            <span className="personagem-label">Time Recomendado:</span>
            <span className="personagem-valor">time recomendado resposta</span>
          </div>
        </div>

        
        
      </div>
      
    </div>
  );
};

