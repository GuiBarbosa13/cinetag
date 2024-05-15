import styled from 'styled-components';
import favoritar from './favoritar.png'

const ContainerCard = styled.div`
    background-color: #E2E2E2;
    width: 202px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0 1em 0;
    margin-top: .5em;

    h2{
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        padding: 1em 0;
    }

    button{
        background-color: transparent;
        border: none;
        padding: 0;
        padding: 1em 0;
        width: 25px;
    }
    

`


const Cards = ({ capa, titulo }) => {
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