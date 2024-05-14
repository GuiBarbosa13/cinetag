import styled from "styled-components";
import Logo from "./imagens/logo.png"
import { Link } from "react-router-dom";
import CabecalhoLink from "../CabecalhoLink";


const HeaderEstilizado = styled.header`
  display: flex;
  justify-content: space-evenly;
  background-color: #000;
  color: #fff;
  padding: 20px 0;


  nav{
    display: flex;
    align-items: center;
  }

  ul{
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4em;
  }
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <Link to='./'>
                <img src={Logo} alt="Logo Cinetag" />
            </Link>

            <nav>
                <ul>
                    <CabecalhoLink path='./'>Home</CabecalhoLink>
                    <CabecalhoLink path='./favoritos'>Favoritos</CabecalhoLink>
                </ul>
            </nav>


        </HeaderEstilizado>
    )
}

export default Cabecalho;