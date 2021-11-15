import React from "react";

export default (props) => {
  return (
    <div className="Contador">
      <label>Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={props.passo}
        onChange={(e) => props.onPassoChange(+e.target.value)}
      />
      {/* crio um input para o usuario dig o numero que deseja ser o contador
        usando onchange e pegando pelo target e +e(e = evento) e p/ garantir
        que converta para number */}
    </div>
  );
};
