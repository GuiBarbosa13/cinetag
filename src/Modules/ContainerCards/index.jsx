import styled from "styled-components";

const ContainerCardsEstilizado = styled.div`
    display: flex;
    justify-content: space-around;
`

const ContainerCards = ({children}) => {
    return (
        <ContainerCardsEstilizado>
            {children}
        </ContainerCardsEstilizado>
    )
}

export default ContainerCards;