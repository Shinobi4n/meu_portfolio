
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./academica.module.css";

const fotos = [
    { src: "/imagens/escolha.jpg", alt: "Ensino médio" },
    { src: "/imagens/acolhidaa.jpg", alt: "Acolhida de novas turmas na escola" }
];

export default function Sobre() {
    const [inicio, setInicio] = useState(0);

    function avancar() {
        setInicio((inicio + 1) % fotos.length);
    }

    function voltar() {
        setInicio((inicio - 1 + fotos.length) % fotos.length);
    }

    const quantidadeVisivel = Math.min(3, fotos.length);

    const fotosVisiveis = Array.from(
        { length: quantidadeVisivel },
        (_, i) => fotos[(inicio + i) % fotos.length]
    );

    return (
        <main className={styles.container}>
            <section className={styles.apresentacao}>
                <h1>Um pouco sobre mim</h1>
                <p>
                    Nascido em Recife, sou alguém que gosta de dialogar,
                    trocar ideias e conhecer diferentes perspectivas.
                    Curto cultura pop e geek, gosto de ler e tenho
                    interesse por geopolítica e pelo mundo ao meu redor.
                </p>
            </section>

            <section className={styles.carrossel}>
                <h2>Momentos da minha trajetória</h2>

                <div className={styles.fotos}>
                    <button onClick={voltar}>‹</button>

                    {fotosVisiveis.map((foto, i) => (
                        <div className={styles.foto} key={`${foto.src}-${i}`}>
                            <Image
                                src={foto.src}
                                alt={foto.alt}
                                width={300}
                                height={220}
                            />
                        </div>
                    ))}

                    <button onClick={avancar}>›</button>
                </div>
            </section>

            <section className={styles.trajetoria}>
                <h2>Minha trajetória</h2>

                <h3>Ensino médio</h3>
                <p>
                    Durante o ensino médio, tive a oportunidade de atuar
                    como monitor de sala e participar de projetos escolares.
                </p>


                <h3>Vida acadêmica</h3>
                <p>
                    Em 2025, ingressei no curso de Análise e
                    Desenvolvimento de Sistemas, iniciando minha
                    trajetória na área de tecnologia.
                </p>
            </section>
        </main>
    );
}
