import styled from 'styled-components';
import favoritar from './favoritar.png'

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
        text-align: center;
        padding: 16px 27px;
    }

    button{
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0 0 16px 27px;
        width: 25px;
    }
`


const Cards = ({ capa, titulo, id, link }) => {
    return (
        <ContainerCard>
            <img src={capa} alt={titulo} />
            <h2>{titulo}</h2>
            <button>
                <img src={favoritar} alt="ícone favoritar" />
            </button>
        </ContainerCard>
    )
}

export default Cards;