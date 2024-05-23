import favoritar from './favoritar.png'
import { useFavoritoContext } from '../../contextos/Favoritos';
import desfavoritar from './desfavoritar.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styles from './cards.module.css';

const ContainerCard = styled.div`
    background-color: #E2E2E2;
    width: 282px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1.5em;

    img{
        width: 100%;
    }

    h2{
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 18px;
        padding: 16px 27px;
    }

    button{
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0 0 16px 27px;
        width: 25px;
        cursor: pointer;
    }
`
const Cards = ({ capa, titulo, id, link }) => {

    const { favorito, adicionarFavorito } = useFavoritoContext();
    const eFavorito = favorito.some(fav => fav.id === id);

    const icone = !eFavorito ? favoritar : desfavoritar;

    return (
        <ContainerCard>
            <Link to={`/${id}`} className={styles.link}>
                <img src={capa} alt={titulo} />
                <h2>{titulo}</h2>
            </Link>

            <button onClick={() => adicionarFavorito({ id, titulo, capa })}>
                <img src={icone} alt="ícone favoritar" />
            </button>
        </ContainerCard>
    )
}

export default Cards;