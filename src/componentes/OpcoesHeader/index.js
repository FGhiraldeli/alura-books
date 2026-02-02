import { Link } from 'react-router-dom'
import styled from 'styled-components'


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
`

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto, index) => (
                <Link to={`/${texto.toLowerCase()}`}>
                    <Opcao key={index}>
                        <p>{texto}</p>
                    </Opcao>
                </Link>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader