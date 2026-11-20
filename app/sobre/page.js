
import styles from "./sobre.module.css";

const tecnologias = [
    {
        nome: "Next.js",
        descricao:
            "Framework utilizado para estruturar a aplicação e organizar suas páginas e rotas.",
    },
    {
        nome: "React",
        descricao:
            "Biblioteca utilizada para construir a interface por meio de componentes.",
    },
    {
        nome: "JavaScript",
        descricao:
            "Linguagem utilizada para implementar a lógica e as funcionalidades da aplicação.",
    },
    {
        nome: "HTML",
        descricao:
            "Utilizado para estruturar os elementos e conteúdos das páginas.",
    },
    {
        nome: "CSS",
        descricao:
            "Responsável pela aparência, cores, espaçamentos e organização visual do site.",
    },
    {
        nome: "CSS Modules",
        descricao:
            "Utilizado para organizar os estilos individualmente em cada página.",
    },
];

const modulos = [
    {
        nome: "Home",
        descricao: "Página inicial com apresentação, informações pessoais e atalhos de navegação.",
    },
    {
        nome: "Sobre",
        descricao: "Página destinada à apresentação técnica e às tecnologias utilizadas.",
    },
    {
        nome: "Experiência Acadêmica",
        descricao: "Apresentação da formação e trajetória educacional.",
    },
    {
        nome: "Experiência Profissional",
        descricao: "Registro das experiências profissionais.",
    },
    {
        nome: "Projetos Desenvolvidos",
        descricao: "Espaço para apresentar projetos acadêmicos e pessoais.",
    },
];

export default function Sobre() {
    return (
        <main className={styles.container}>
            <section className={styles.introducao}>
                <h1>Sobre o projeto</h1>
                <p>
                    Portfólio desenvolvido para expor minha
                    trajetória acadêmica, com o objetivo de apresentar
                    minhas experiências, conhecimentos e projetos.
                    Ao longo do desenvolvimento, foram utilizadas
                    tecnologias voltadas à construção de interfaces web
                    e à organização de aplicações.
                </p>
            </section>

            <section className={styles.secao}>
                <h2>Tecnologias utilizadas</h2>

                <div className={styles.grid}>
                    {tecnologias.map((tecnologia) => (
                        <article className={styles.card} key={tecnologia.nome}>
                            <h3>{tecnologia.nome}</h3>
                            <p>{tecnologia.descricao}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles.secao}>
                <h2>Estrutura da aplicação</h2>

                <p className={styles.descricao}>
                    O projeto foi dividido em páginas com objetivos
                    específicos, facilitando a navegação e a organização
                    das informações.
                </p>

                <div className={styles.grid}>
                    {modulos.map((modulo) => (
                        <article className={styles.card} key={modulo.nome}>
                            <h3>{modulo.nome}</h3>
                            <p>{modulo.descricao}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles.secao}>
                <h2>Ferramentas utilizadas</h2>

                <div className={styles.ferramentas}>
                    <span>Visual Studio Code</span>
                    <span>Git</span>
                    <span>GitHub</span>
                </div>
            </section>
        </main>
    );
}
