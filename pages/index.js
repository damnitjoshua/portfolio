import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joshua Chew</title>
        <link rel="canonical" href="https://damnitjoshua.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Joshua Chew" />
        <meta name="description" content="Front-end web developer and user interface designer based in Kuala Lumpur, Malaysia." />
        <meta name="keywords" content="Joshua Chew, damnitjoshua, Joshua Chew Jay Han, malaysia web developer, malaysia ui designer. selangor web developer, selangor ui designer, rawang web developer." />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Joshua Chew Jay Han" />
        <link rel="preload" as="image" href="/headerimg.webp" />
        <link rel="preload" as="image" href="/eggven.webp" />
        <link rel="preload" as="image" href="/stepup.webp" />
        <link rel="preload" as="image" href="/chai.webp" />
        <link rel="preload" as="image" href="/bcu.webp" />
        <link rel="preload" as="image" href="/covmy.webp" />
        <link rel="preload" as="image" href="/uid.webp" />
        <link rel="preload" as="image" href="/moistapp.webp" />
        <link rel="preload" as="image" href="/daydream.webp" />
        <link rel="preload" as="image" href="/ketupat.webp" />
      </Head>

      <header className={styles.header}>
        <img 
          className={styles.headerimg}
          src="/headerimg.webp"
          alt="Photo of Joshua Chew"
          loading="lazy"
        />

        <div>
          <h1>Hello, I’m Joshua 👋</h1>
          <h2>Currently pursuing Diploma in Computer Studies at University of Wollongong Malaysia. 
              I mostly do <b>Front-End Web Development</b> and <b>User Interface Design</b>. I also enjoy watching 
              F1 and Anime on the weekends!
          </h2>
        </div>

        <div className={styles.socialCon}>
          <a href="https://dribbble.com/damnitjoshua" target="_blank" rel="noopener noreferrer external" role="link" aria-label="Dribble">Dribbble</a>
          <a href="https://www.linkedin.com/in/jcjh/" target="_blank" rel="noopener noreferrer external" role="link" aria-label="Dribble">LinkedIn</a>
          <a href="https://myanimelist.net/profile/damnitjoshua" target="_blank" rel="noopener noreferrer external" role="link" aria-label="My Anime List">MAL</a>
          <a href="mailto:joshuachew8118@gmail.com" target="_blank" rel="noopener noreferrer external" role="link" aria-label="Email">Email</a>
          <a href="https://telegram.me/damnitjoshua" target="_blank" rel="noopener noreferrer external" role="link" aria-label="Telegram">Telegram</a>
          <a href="https://wa.me/+60122550871" target="_blank" rel="noopener noreferrer external" role="link" aria-label="Whats App">WhatsApp</a>
        </div>
      </header>

      <article className={styles.project}>
        <h1>Projects</h1>

        <div className={styles.projectCon}>
          <a href="https://eggventure.netlify.app" target="_blank" rel="noopener noreferrer external" role="link" aria-label="Egg Venture">
            <img
              className={styles.img}
              src="/eggven.webp"
              alt="Photo of Joshua Chew"
              loading="lazy"
            />
            <h2>Egg Venture Technology</h2>
            <h3>Homepage and Covid Tracking for egg processing and handling company.</h3>
            <span>CODE</span><span>DESIGN</span>
          </a>
          <a href="https://dribbble.com/shots/7688660-StepUp-healthcare-app" target="_blank" rel="noopener noreferrer external" role="link" aria-label="Dribbble">
            <img
              className={styles.img}
              src="/stepup.webp"
              alt="StepUp"
              loading="lazy"
            />
            <h2>StepUp</h2>
            <h3>Concept app that helps you focus on your wellbeing.</h3>
            <span>DESIGN</span>
          </a>
          <a href="https://www.youtube.com/watch?v=Vle4bZ-ovSg" target="_blank" rel="noopener noreferrer external" role="Link" aria-label="The Story of Uncle Chai">
            <img
              className={styles.img}
              src="/chai.webp"
              alt="Photo of Joshua Chew"
              loading="lazy"
            />
            <h2>The Story of Uncle Chai</h2>
            <h3>Top 20 in the #NeighbourhoodProject short film competition.</h3>
            <span>EDITOR</span><span>DESIGN</span>
          </a>
          
          <Link href="/projects" rel="prefetch">
            <div className={styles.link}>
              View more
            </div>
          </Link>
        </div>
      </article>
    </div>
  )
}
