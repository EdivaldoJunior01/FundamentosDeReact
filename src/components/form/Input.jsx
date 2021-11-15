import React, {useState} from "react";

export default props => {
    const  [nome, setNome] = useState("nomeInicial")
    //useState vai retornar um array com 2 elementos
    // 1 - e o valor
    // 2 - e a função que altera o valor
    return(
        <>
        <h3>{nome}</h3>
        <input type="text" value={nome} 
        onChange={e => setNome( e.target.value)}/>
        {/* atualiza o estado do componente de acordo com que ele digita */}
        </>
    )
}