import { useParams } from "react-router-dom"
import Banner from "../../Modules/Banner"
import Container from "../../Modules/Container"
import Titulo from "../../Modules/Titulo"
import NaoEncontrado from "../NaoEncontrado"
import { useEffect, useState } from "react"

const Player = () => {
    const [video, setVideo] = useState([])

    const parametros = useParams();
    
    useEffect(() =>{
        fetch(`https://my-json-server.typicode.com/GuiBarbosa13/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => setVideo(...dados))
    },[])
    
    if(!video){return <NaoEncontrado/>}

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