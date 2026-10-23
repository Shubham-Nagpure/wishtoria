import Link from "next/link";
import { PAGES } from "@/lib/pages";
import { Hero } from "./Hero";
import s from "./Landing.module.css";

const INSTA = "https://www.instagram.com/giftme.space/";

export function Landing() {
  return (
    <div className={s.page}>
      <Hero />

      <section id="how" className={s.band}>
        <h2 className={s.bandTitle}>How it works</h2>
        <div className={s.grid}>
          <div className={s.card}><span className={s.ico}>1️⃣</span><h3>Pick a template</h3><p>Romantic, birthday, valentine, sorry and more — each with its own vibe.</p></div>
          <div className={s.card}><span className={s.ico}>2️⃣</span><h3>Fill in your love</h3><p>Their name, your story, a letter, photos, a quiz, reasons — as many pages as you want.</p></div>
          <div className={s.card}><span className={s.ico}>3️⃣</span><h3>Share the magic</h3><p>Get a private link and a QR code to share with your special someone.</p></div>
        </div>
      </section>

      <section id="features" className={`${s.band} ${s.bandAlt}`}>
        <div className={s.bandInner}>
          <h2 className={s.bandTitle}>Every page, made personal</h2>
          <div className={s.grid}>
            {PAGES.map((p) => (
              <div key={p.id} className={s.card}><span className={s.ico}>{p.ico}</span><h3>{p.name}</h3><p>{p.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className={s.band}>
        <h2 className={s.bandTitle}>Simple, sweet pricing</h2>
        <p className={s.bandSub}>Start free, upgrade any time.</p>
        <div className={s.prices}>
          <div className={s.price}>
            <h3 className={s.priceName}>Simple</h3>
            <div className={s.priceTag}>Free<span>/site</span></div>
            <ul className={s.feats}><li>✓ Up to 3 pages</li><li>✓ One short ad</li><li>✓ “Made with wishtoria” badge</li><li>✓ Link + QR</li></ul>
            <Link href="/create" className={`${s.btn} ${s.btnBlock}`}>Start free</Link>
          </div>
          <div className={`${s.price} ${s.priceFeat}`}>
            <h3 className={s.priceName}>Basic</h3>
            <div className={s.priceTag}>₹1499<span>/site</span></div>
            <ul className={s.feats}><li>✓ Up to 4 pages</li><li>✓ No ads, no badge</li><li>✓ Extra pages ₹399 each</li><li>✓ Private link + QR</li></ul>
            <Link href="/create" className={`${s.btn} ${s.btnBlock}`}>Choose Basic</Link>
          </div>
          <div className={s.price}>
            <h3 className={s.priceName}>Premium</h3>
            <div className={s.priceTag}>₹2999<span>/site</span></div>
            <ul className={s.feats}><li>✓ All pages included</li><li>✓ Background music</li><li>✓ Custom domain</li><li>✓ Everything unlocked</li></ul>
            <Link href="/create" className={`${s.btn} ${s.btnBlock}`}>Choose Premium</Link>
          </div>
        </div>
      </section>

      <section id="about" className={`${s.band} ${s.bandAlt}`}>
        <div className={s.bandInner}>
          <h2 className={s.bandTitle}>About us</h2>
          <div className={s.about}>
            <p className={s.aboutText}>wishtoria is a tiny studio with one big goal: help you turn a simple “I was thinking of you” into a website they'll never forget. Every template and detail is crafted so anyone — no coding — can gift a moment that feels personal and magical. 💛</p>
            <a className={s.insta} href={INSTA} target="_blank" rel="noopener">📸 @giftme.space on Instagram</a>
          </div>
        </div>
      </section>

      <section className={s.ctaFinal}>
        <h2>Ready to make them smile?</h2>
        <p>It only takes a few minutes to create something they'll never forget.</p>
        <Link href="/create" className={`${s.btn} ${s.btnLg}`}>✦ Create Today →</Link>
      </section>

      <footer className={s.footer}>
        <span style={{ fontFamily: "Fredoka, sans-serif", fontWeight: 700, color: "var(--ink)" }}>🎁 wishtoria</span>
        <span><a href={INSTA} target="_blank" rel="noopener" style={{ color: "var(--accent)", fontWeight: 600 }}>📸 Instagram</a> · Made for the ones who love out loud.</span>
      </footer>
    </div>
  );
}
