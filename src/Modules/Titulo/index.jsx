import styled from "styled-components";

const TituloEstilizado = styled.div`
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-align: center;
    padding: 2.5em 0;
`


const Titulo = ({children}) => {
    return (
        <TituloEstilizado>
            {children}
        </TituloEstilizado>
    )
}

export default Titulo;