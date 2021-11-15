import react from "react";

export default parametros =>  /* parametros mais usado como props */
//props.titulo = "Outro Titulo" NÃO PODE ISSO É ERRADO N PASSO P
//PROPS É SOMENTE LEITURA !!
    <>
        <h3>{parametros.titulo}</h3>
        <p>{parametros.subtitulos}</p>
    </>;
