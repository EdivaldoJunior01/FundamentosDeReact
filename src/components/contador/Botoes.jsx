import React from "react";

export default (props) => {
  return (
    <div>
      <button onClick={props.Onincrementar}>+</button> {/* la em contador.jsx eu chamo
       a função pelo apelido  ex:  Onincrementar={this.incrementar}*/}
      <button onClick={props.Ondecrementar}>-</button>
    </div>
  );
};
