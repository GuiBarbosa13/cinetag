import { useParams } from "react-router-dom"
import Banner from "../../Modules/Banner"
import Container from "../../Modules/Container"
import Titulo from "../../Modules/Titulo"
import videos from "../../json/db.json"

const Player = () => {
    const parametros = useParams();
    const video = videos.find(video => video.id === Number(parametros.id));

    return(
        <>
            <Banner imagem="player"/>
            <Container>
                <Titulo><h1>Player</h1></Titulo>
                <iframe width="853" 
                height="480" 
                src={video.link} 
                title={video.titulo} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                />
            </Container>
        </>
    )
}

export default Player