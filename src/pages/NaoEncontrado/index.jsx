import styled from "styled-components";

const SectionEstilizada = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 72vh;
    gap: 1.8em;


    h2, p{
        font-family: 'Montserrat', sans-serif;
    }

    h2{
        font-size: 64px;
        font-weight: 700;
    }

    p{
        font-size: 48px;
        font-weight: 500;
    }

`

const NaoEncontrado = () => {
    return(
        <SectionEstilizada>
            <h2>Ops...</h2>
            <p>O conteúdo procurado não foi encontrado :/</p>
        </SectionEstilizada>
    )
}

export default NaoEncontrado;