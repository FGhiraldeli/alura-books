import { livros_lancamentos } from "./dadosUltimosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import imagemLivro from '../../imagens/capa_jurassic_park.jpg'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
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
            <Titulo cor="#000" tamanhofonte="36px">ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros_lancamentos.map((livro, index) => (
                    <img src={livro.src} key={index} alt="" />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="Talvez se enteresse por"
                subtitulo="Jurassic Park"
                descricao="Dinossauros matando pessoas"
                img={imagemLivro}
                />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos