
import styles from "./profissional.module.css";

export default function Profissional() {
    return (
        <main className={styles.container}>
            <section className={styles.introducao}>
                <h1>Experiência Profissional</h1>
                <p>
                    Minha experiência profissional me proporcionou
                    aprendizados importantes sobre responsabilidade,
                    comunicação e relacionamento com o público.
                </p>
            </section>

            <section className={styles.experiencias}>
                <article className={styles.card}>
                    <span className={styles.periodo}>
                        Experiência profissional
                    </span>

                    <h2>Atendente de balcão</h2>

                    <h3>Rede de farmácias</h3>

                    <p>
                        Trabalhei como atendente de balcão em uma rede de
                        farmácias, tendo contato direto com o público
                        e participando da rotina de atendimento.
                    </p>

                    <div className={styles.tags}>
                        <span>Atendimento ao público</span>
                        <span>Comunicação</span>

                    </div>
                </article>
            </section>
        </main>
    );
}
