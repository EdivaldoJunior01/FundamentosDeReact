import React, {useState} from "react";

export default (props) => {
    const [numeos, setNumeros] = useState(Array(props.qtdeNumeros).fill(0))
    /* qtdeNumeros de numeros to passando o valor direto em app.jsx 
    O método fill() preenche todos os valores do array a partir do
     índice inicial a um índice final com um valor estático no nosso caso e 0.*/

    function numerosNãoContidos(array){
        const max = 60
        const min = 1 
        const newNumber = parseInt(Math.random() * (max - min)) + min/*gerar valores de no max 60 e no minimo 1*/
        return array.includes(newNumber)
        ? numerosNãoContidos(array) : newNumber
        /* se for true eu chamo novamente a função até gerar um valor uni diferente de setnumeros
        passando o novo array, caso o numero n esteja contido no array eu retorno o novo numero que acabei
        de criar ?true :false  */
    }

     function gerarNumeros(){
         const noArray = Array(props.qtdeNumeros)
         .fill(0)
         .reduce((a) => [...a, numerosNãoContidos(a)], [])
         .sort((a, b) => a - b) /* sort ordena os valores aq em ordem crescente*/
         /* a = array acumulado*/
         /* O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno. */
         setNumeros (noArray)
     }
    return(
        <>
        <h2>Mega-Sena</h2>
        <h4>{numeos.join(' ')}</h4> {/* join so para da um espaço entre os numeros ' ' */}
        <button onClick={gerarNumeros}>Gerador de Números</button>
        </>
    )
}