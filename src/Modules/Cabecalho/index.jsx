import styled from "styled-components";
import Logo from "./imagens/logo.png"


const HeaderEstilizado = styled.header`
  display: flex;
  justify-content: space-evenly;
  background-color: #000;
  color: #fff;
  padding: 20px 0;

  ul{
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4em;
    
    li{
        
        a{
            text-decoration: none;
            color: #fff;
            font-size: 18px;
        }
    }
  }
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src={Logo} alt="Logo Cinetag"/>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Favoritos</a>
                </li>
            </ul>
        </HeaderEstilizado>
    )
}

export default Cabecalho;