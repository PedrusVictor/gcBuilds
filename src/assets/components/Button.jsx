import React, { useState } from 'react';

export function Button(props) {
  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <button className="btn btn-primary rounded-pill" onClick={() => setVisivel(!visivel)}>
        {visivel ? 'Esconder ' : 'Mostrar '}
        {props.nomeComponente}
      </button>
      {visivel && props.componente}
    </div>
  );
}


