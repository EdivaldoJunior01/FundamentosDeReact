import React from "react";
import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametros from "./components/basicos/ComParametros";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/Layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai"
import SuperPai from "./components/comunicacao/indireta/SuperPai";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Contador2 from "./components/contador/Contador2";
import Mega from "./components/mega/Mega";
export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
          <Card titulo="#12 - Números Megasena" color="#5c3c45"> {/* PASSANDO UMA PROP COLOR */}
              <Mega qtdeNumeros={8}></Mega> 
          </Card>
          <Card titulo="#11 - Contador com os componententes juntos" color="#5c3c98"> {/* PASSANDO UMA PROP COLOR */}
              <Contador2 passo={5} valor={10}></Contador2> 
          </Card>
          <Card titulo="#10 - Contador" color="#5c3c92"> {/* PASSANDO UMA PROP COLOR */}
              <Contador passo={10} valor={100}></Contador> 
          </Card>
          <Card titulo="#09 - Input" color="#d72631"> {/* PASSANDO UMA PROP COLOR */}
             <Input></Input> 
          </Card>
          <Card titulo="#08 - Comunicação Indireta" color="#be1558"> {/* PASSANDO UMA PROP COLOR */}
             <SuperPai></SuperPai> {/* basta chamar o pai que ele ja chama o comp Filho */}
          </Card>
          <Card titulo="#07 - Comunicação Direta" color="#ecc19c"> {/* PASSANDO UMA PROP COLOR */}
              <Pai sobrenome=" Silva"></Pai> {/* basta chamar o pai que ele ja chama o comp Filho */}
          </Card>
          <Card titulo="#05 - Condicional versão 2 com if muito louco" color="#FA6900"> {/* PASSANDO UMA PROP COLOR */}
             <CondicionalComIf numero={10} />
          </Card>
          <Card titulo="#05 - Condicional versão 1"color="#FA6850">
             <Condicional numero={11} />
          </Card>
          <Card titulo="#04 - Repetição" color="#f6ca29">
             <Repeticao />
          </Card>
          <Card titulo="#03 - Componente com Filhos" color="#1b6535">
            <ComFilhos>
              <ul>
                <li>Ana</li>
                <li>Jose</li>
                <li>Luis</li>
              </ul>
            </ComFilhos>
          </Card>
          <Card titulo="#02 - Componente com parametros" color="#ffc13b">
             <ComParametros titulo="aqui titulo" subtitulos="aqui subtitulo" color="#d2601a"/>
          </Card>
          <Card titulo="#01 - Primeiro componente" color="#ffea04">
              <Primeiro />
          </Card>
    </div>
   
  </div>
);
