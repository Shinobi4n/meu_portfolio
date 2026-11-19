import Link from "next/link";
import Image from "next/image"
import { perfil } from "../data/perfil";
import styles from "./home.module.css";



const atalhos = [
  { href: "/sobre", titulo: "SOBRE", texto: "Quem sou eu e as tecnologias que uso." },
  { href: "/academica", titulo: "ACADÊMIA", texto: "Minha formação e cursos." },
  { href: "/profissional", titulo: "PROFISSIONAL", texto: "Experiências e trajetória." },
  { href: "/projetos", titulo: "PROJETOS", texto: "Repositórios direto do GitHub." },
];


export default function Ruan() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroTexto}>
          <p className={styles.hello}>Olá, eu sou</p>
          <h1 className={styles.nome}>{perfil.nome}</h1>
          <h2 className={styles.cargo}>{perfil.cargo}</h2>
          <p className={styles.frase}>{perfil.frase}</p>

          <div className={styles.botoes}>
            <Link href="/projetos" className={styles.btnPrimario}>
              Ver projetos
            </Link>
            <a href={`mailto:${perfil.email}`} className={styles.btnSecundario}>
              Falar comigo
            </a>
          </div>

          <div className={styles.social}>
            <a href={`https://github.com/${perfil.github}`} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={perfil.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${perfil.email}`}>E-mail</a>
          </div>
        </div>


        <div className={styles.heroImagem}>
          <Image
            src="/imagens/fotinha.jpg"
            alt="Foto de Ruan"
            width={380}
            height={440}
            className={styles.foto}
          />
        </div>

      </section>




      <section className={styles.atalhos}>
        {atalhos.map((item) => (
          <Link key={item.href} href={item.href} className={styles.card}>
            <span className={styles.emoji}>{item.emoji}</span>
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </Link>
        ))}
      </section>
    </>
  );
}