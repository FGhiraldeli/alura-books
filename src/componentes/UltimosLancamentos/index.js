import { livros_lancamentos } from "./dadosUltimosLancamentos"
import styled from "styled-components"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo>ULTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros_lancamentos.map((livro, index) => (
                    <img src={livro.src} key={index} alt="" />
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos