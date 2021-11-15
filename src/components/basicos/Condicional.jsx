import react from "react";

export default (props) => {
  return (
    <div>
      <h2>O número é {props.numero}</h2>
      {props.numero % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>}
      {/*  <span>Ímpar</span> */} {/* ? e : sao operadores ternário  condition ? expr1 : expr2 */}
    </div>
  );
};
