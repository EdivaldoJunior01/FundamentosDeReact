import React from "react";
import "./Contador.css"


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

    render() {
      return (
        <div className="Contador">
          <h2>Contador</h2>
          <div>
                <label>Passo: </label>
                <input  id="passoInput" type="number"
                    value={this.state.passo}
                    onChange={(e) => this.setState({passo: +e.target.value})}
      />
      {/* crio um input para o usuario dig o numero que deseja ser o contador
        usando onchange e pegando pelo target e +e(e = evento) e p/ garantir
        que converta para number */}
    </div>
  
  
    <h4>Valor: {this.state.valor} </h4> {/* h4 é o display */}
  
    <div>
      <button onClick={this.incrementar}>+</button> {/* la em contador.jsx eu chamo
       a função pelo apelido  ex:  Onincrementar={this.incrementar}*/}
      <button onClick={this.decrementar}>-</button>
    </div>
       
        </div>
      );
    }
  }
  