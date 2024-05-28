import Banner from "../../Modules/Banner";
import Cards from "../../Modules/Cards";
import Titulo from "../../Modules/Titulo";
import Container from "../../Modules/Container";
import ContainerCards from "../../Modules/ContainerCards";
import { useEffect, useState } from "react";



const Inicio = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/GuiBarbosa13/cinetag-api/videos')
            .then(resposta => resposta.json())
            .then(dados => { setVideos(dados) })
    }, []
    )


    return (
        <>
            <Banner imagem={"home"} />
            <Container>
                <Titulo><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titulo>
                <ContainerCards>
                    {videos.map(conteudo => <Cards link={conteudo.link} id={conteudo.id} capa={conteudo.capa} titulo={conteudo.titulo} key={conteudo.id} />)}
                </ContainerCards>
            </Container>
        </>

    )
}

export default Inicio;