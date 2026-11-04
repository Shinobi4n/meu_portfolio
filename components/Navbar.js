"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
    { href: "/", label: "Ruan" },
    { href: "/sobre", label: "Sobre" },
    { href: "/academica", label: "Acadêmica" },
    { href: "/profissional", label: "Profissional" },
    { href: "/projetos", label: "Projetos" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    &lt;seu.nome /&gt;
                </Link>

                <ul className={styles.links}>
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`${styles.link} ${pathname === href ? styles.active : ""}`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}