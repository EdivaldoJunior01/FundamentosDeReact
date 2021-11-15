import React from "react";

export default (props) => {
  return (
    <div>
      <button onClick={() => {
          props.Onclicar(Math.random(),'Muda com o clique! ')
      }}>Alterar</button>
      {/*chamando a função do comp pai (SuperPai.jsx)  */}
    </div>
  );
};
