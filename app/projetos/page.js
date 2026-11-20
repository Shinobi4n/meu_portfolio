
"use client";

import { useEffect, useState } from "react";

import styles from "./projetos.module.css";

const projetos = [
    {
        nome: "Bazar Solidário",
        categoria: "Projeto acadêmico",
        descricao:
            "Plataforma voltada à divulgação de produtos de brechós, permitindo que usuários encontrem anúncios e entrem em contato com as lojas.",
        tecnologias: ["Java", "Spring Boot", "PostgreSQL"],
    },
    {
        nome: "Comenta-Comigo",
        categoria: "Projeto acadêmico",
        descricao:
            "Projeto de desenvolvimento de aplicação com foco na construção de funcionalidades e organização do backend.",
        tecnologias: ["Java", "Spring Boot"],
    },
    {
        nome: "Meu Portfólio",
        categoria: "Projeto pessoal",
        descricao:
            "Aplicação desenvolvida para apresentar minha trajetória acadêmica, experiências profissionais, conhecimentos e projetos.",
        tecnologias: ["React", "Next.js", "JavaScript", "CSS"],
    },
];

export default function Projetos() {

    const [repositorios, setRepositorios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function buscarRepositorios() {
            try {
                const resposta = await fetch(
                    "https://api.github.com/users/Shinobi4n/repos?sort=updated&per_page=10"
                );

                if (!resposta.ok) {
                    throw new Error("Erro ao buscar repositórios");
                }

                const dados = await resposta.json();
                setRepositorios(dados);
            } catch (error) {
                setErro(true);
            } finally {
                setCarregando(false);
            }
        }

        buscarRepositorios();
    }, []);


    return (
        <main className={styles.container}>


            <section className={styles.introducao}>
                <h1>Projetos Desenvolvidos</h1>
                <p>
                    Aqui estão alguns projetos que desenvolvi durante
                    minha trajetória acadêmica e pessoal, colocando
                    em prática conhecimentos adquiridos em programação
                    e desenvolvimento de sistemas.
                </p>
            </section>

            <section className={styles.grade}>
                {projetos.map((projeto) => (
                    <article className={styles.card} key={projeto.nome}>
                        <span className={styles.categoria}>
                            {projeto.categoria}
                        </span>

                        <h2>{projeto.nome}</h2>

                        <p>{projeto.descricao}</p>

                        <div className={styles.tecnologias}>
                            {projeto.tecnologias.map((tecnologia) => (
                                <span key={tecnologia}>{tecnologia}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </section>

            <section className={styles.grade}>

                <h2> Meus repositórios no GitHub </h2>

                {carregando && <p>Carregando projetos...</p>}

                {erro && <p>Não foi possível carregar os projetos.</p>}

                {!carregando && !erro && repositorios.map((repo) => (
                    <article className={styles.card} key={repo.id}>
                        <h3>{repo.name}</h3>

                        <p>
                            {repo.description || "Sem descrição disponível."}
                        </p>

                        <span>{repo.language || "Linguagem não informada"}</span>

                        <a href={repo.html_url} target="_blank" rel="noreferrer">
                            Ver no GitHub →
                        </a>
                    </article>
                ))}
            </section>

        </main>
    );
}
