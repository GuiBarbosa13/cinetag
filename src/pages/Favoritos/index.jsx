import Banner from "../../Modules/Banner";
import Cards from "../../Modules/Cards";
import Container from "../../Modules/Container";
import ContainerCards from "../../Modules/ContainerCards";
import Titulo from "../../Modules/Titulo";
import { useFavoritoContext } from "../../contextos/Favoritos";

const Favoritos = () => {

    const { favorito } = useFavoritoContext();

    return (

        <section>
            <Banner imagem="favoritos" />
            <Container>
                <Titulo>Meus Favoritos</Titulo>
                <ContainerCards>
                    {favorito.map(item => <Cards key={item.titulo} capa={item.capa} id={item.id} titulo={item.titulo} link={item.link} />)}
                </ContainerCards>

            </Container>
        </section>
    )
};

export default Favoritos;