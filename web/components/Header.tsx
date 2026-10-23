import Link from "next/link";
import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.header}>
      <div className={`container ${s.row}`}>
        <Link href="/" className={s.logo}>
          🎁 wishtoria
        </Link>
        <nav className={s.navLinks}>
          <Link href="/#how">How it works</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#about">About</Link>
        </nav>
        <Link href="/create" className={s.cta}>
          Create Surprise
        </Link>
      </div>
    </header>
  );
}
