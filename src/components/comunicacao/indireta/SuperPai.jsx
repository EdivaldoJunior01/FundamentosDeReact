import React, {useState}from "react";
/* A função useState é um gancho embutido que pode ser importado do pacote react
 . Ele permite que você adicione estado aos seus componentes funcionais. 
 Usando o gancho useState dentro de um componente de função, você pode criar
  uma parte do estado sem alternar para componentes de classe.*/
import SubFilho from "./SubFilho";

export default (props) => {

    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState("Valor")

    function quandoClicar(valorgerado, texto){ //pego os parametros da função que esta em filho valorgerado = "Math", texto = "Fim"
        setNum(valorgerado)
        setTexto(texto)
        console.log("Ação!!!")
        console.log(valorgerado)
        console.log(texto)
    }
  return (
    <div>
      <h4>{texto}{num}</h4>
      <SubFilho Onclicar={quandoClicar}></SubFilho>
    </div>
  );
};
