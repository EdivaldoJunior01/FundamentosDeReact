import React from "react";
import Filho from "./Filho";

export default props => 
<div>
<Filho sobrenome=" Araujo"><strong>Junior</strong></Filho>
<Filho sobrenome=" Araujo"><strong>Luciana</strong></Filho>
<Filho {...props}><strong>José</strong></Filho>
{/* A sintaxe de propagação ( ...) permite que um iterável, como uma expressão 
de matriz ou string, seja expandido em locais onde zero ou mais argumentos
 (para chamadas de função) ou elementos (para literais de matriz)
 ex: estou mudando o sobrenom direto em app.js
  */}
</div>