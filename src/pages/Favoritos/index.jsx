import Banner from "../../Modules/Banner";
import Cards from "../../Modules/Cards";
import Titulo from "../../Modules/Titulo";

const Favoritos = () => {
    return (
        <>
            <Banner imagem="favoritos"/>
            <Titulo>Meus Favoritos</Titulo>
            <Cards capa="https://m.media-amazon.com/images/S/pv-target-images/cc08832688a5e2806794ade6d0eb628935a0a38341893e38d2c51c270b2869ea.jpg" titulo="Pearl"></Cards>
        </>
    )
};

export default Favoritos;