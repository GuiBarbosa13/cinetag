import Banner from "../../Modules/Banner";
import Cards from "../../Modules/Cards";
import Titulo from "../../Modules/Titulo";
import ConteudoCards from "../../Modules/Cards/db.json"
import Container from "../../Modules/Container";
import ContainerCards from "../../Modules/ContainerCards";

const Inicio = () => {


    return (
        <>
            <Banner imagem={"home"} />
            <Container>
                <Titulo><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titulo>
                <ContainerCards>
                    {ConteudoCards.map(conteudo => <Cards link={conteudo.link} id={conteudo.id} capa={conteudo.capa} titulo={conteudo.titulo} key={conteudo.id} />)}
                </ContainerCards>
            </Container>
        </>

    )
}

export default Inicio;