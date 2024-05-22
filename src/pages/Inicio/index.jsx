import Banner from "../../Modules/Banner";
import Cards from "../../Modules/Cards";
import Titulo from "../../Modules/Titulo";
import ConteudoCards from "../../Modules/Cards/db.json"
import styled from "styled-components";

const ContainerCards = styled.div`
    display: flex;
    justify-content: space-between;
`

const Inicio = () =>{


    return (
        <>
        <Banner imagem={"home"}/>
        <Titulo><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titulo>
        <ContainerCards>
            {ConteudoCards.map(conteudo => <Cards link={conteudo.link} id={conteudo.id} capa={conteudo.capa} titulo={conteudo.titulo} key={conteudo.id}/>)}
        </ContainerCards>
        
        </>
        
    )
}

export default Inicio;