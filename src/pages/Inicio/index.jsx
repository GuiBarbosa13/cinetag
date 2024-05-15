import Banner from "../../Modules/Banner";
import Cards from "../../Modules/Cards";
import Titulo from "../../Modules/Titulo";

const Inicio = () =>{


    return (
        <>
        <Banner imagem={"home"}/>
        <Titulo><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titulo>
        <Cards titulo="teste" capa="https://img.freepik.com/fotos-gratis/um-lobo-colorido-com-um-fundo-preto_1340-40203.jpg"/>
        </>
        
    )
}

export default Inicio;