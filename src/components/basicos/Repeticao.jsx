import react from "react";
import produtos from "../../data/produtos";



export default props =>{

    function getProdutos(){
        return produtos.map(prod => { /* estpu usando o map transformando um obj
            do tipo produto (produto.js) para tranformar cada produto de la em um trecho de jsx */
                return <li key={prod.id}>{/* usa se key p/ o react para de da erro */}
                    {prod.id} - {prod.nome} - R$ {prod.preco}
                    </li>
        })
    }
    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutos()}{/* chamando a função */}
            </ul>
        </div>
    )
}