import Link from "next/link";
import landing from "./Landing.module.css";
import s from "./Hero.module.css";

export function Hero() {
  return (
    <section className={s.hero}>
      <div>
        <span className={s.pill}>✨ A gift they open in a browser</span>
        <h1 className={s.heroTitle}>
          Don&apos;t just say <span className={s.grad}>Happy Birthday</span>.
          <br />
          Make them feel it.
        </h1>
        <p className={s.heroSub}>
          A personalized, animated journey with their name, your story, a letter, a gallery, a quiz and a
          confetti finale. Pick a template, fill in your words, share the link or a QR. No code.
        </p>
        <div className={s.heroCta}>
          <Link href="/create" className={`${landing.btn} ${landing.btnLg}`}>
            ✦ Create Surprise →
          </Link>
          <Link href="/s/demo-valentine" className={`${landing.btn} ${s.btnGhost}`} target="_blank">
            See a live demo
          </Link>
        </div>
        <div className={s.heroTrust}>
          <span>❤️ 2,400+ surprises made</span>
          <span>⭐ 4.9 / 5</span>
          <span>⚡ Ready in minutes</span>
        </div>
      </div>
      <div className={s.stack} aria-hidden>
        <div className={s.fcard} style={{ top: "8%", left: "6%", background: "#FFF0F5" }}>
          📖 Your Story
        </div>
        <div className={s.fcard} style={{ top: "34%", right: "2%", background: "#FFF9E6" }}>
          📸 Gallery
        </div>
        <div className={s.fcard} style={{ top: "58%", left: "12%", background: "#F3F0FF" }}>
          💘 Will you?
        </div>
        <div className={s.fcard} style={{ top: "78%", right: "8%", background: "#E9FBF3" }}>
          🎁 Finale
        </div>
      </div>
    </section>
  );
}
