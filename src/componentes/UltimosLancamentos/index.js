import { livros_lancamentos } from "./dadosUltimosLancamentos"

function UltimosLancamentos() {
    return (
        <section>
            <h2>ULTIMOS LANCAMENTOS</h2>
            {livros_lancamentos.map((livro, index) => (
                <img src={livro.src} key={index} alt=""/>
            ))}
        </section>
    )
}

export default UltimosLancamentos