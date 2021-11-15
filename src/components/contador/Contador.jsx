import React from "react";
import "./Contador.css";
import Display from "./Display";
import PassodoContador from "./PassodoContador";
import Botoes from "./Botoes";

export default class Contador extends React.Component {
  state = {
    passo: this.props.passo || 1, //caso n tenha valor começa adc de 1 em 1
    valor: this.props.valor || 0, //caso n tenha valor 0 e o valor atual
  };

  incrementar = () => {
    this.setState({
      valor: this.state.valor + this.state.passo, //chamo o valor que e oq eu quero mudar
    });
  };
  decrementar = () => {
    this.setState({
      valor: this.state.valor - this.state.passo, //chamo o valor que e oq eu quero mudar
    });
  };

  mudarPasso = (novopasso) => {
    this.setState({
      passo: novopasso,
    });
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <PassodoContador 
          passo={this.state.passo}
          onPassoChange={this.mudarPasso}>
          </PassodoContador>


        <Display valor={this.state.valor}></Display> {/* chamando o display */}

        <Botoes Onincrementar={this.incrementar} Ondecrementar={this.decrementar}></Botoes>
     
      </div>
    );
  }
}
