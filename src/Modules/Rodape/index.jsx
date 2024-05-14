import styled from "styled-components";

const FooterEstilizado = styled.footer`
    background-color: #000;
    text-align: center;
    padding: 33px 0;

    p{
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        color: #fff;
        font-weight: 400;
    }
`

const Rodape = () => {
    return (
        <FooterEstilizado>
            <p>Desenvolvido por Guilherme Barbosa</p>
        </FooterEstilizado>
    )
}

export default Rodape;