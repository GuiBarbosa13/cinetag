import styled from "styled-components"

const SectionEstilizada = styled.section`
    margin: 2em 20em;
    text-align: center;
`


const Container = ({children}) => {
    return (
    <SectionEstilizada>
        {children}
    </SectionEstilizada>)
}

export default Container;