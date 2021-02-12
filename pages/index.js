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
      </Head>

      <header className={styles.header}>
        <img 
          className={styles.headerimg}
          src="/headerimg.jpg"
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
          <a href="https://twitter.com/damnitjoshua_" target="_blank" rel="noopener">Twitter</a>
          <a href="https://instagram.com/damnitjoshua" target="_blank" rel="noopener">Instagram</a>
          <a href="https://myanimelist.net/profile/damnitjoshua" target="_blank" rel="noopener">MAL</a>
          <a href="https://dribbble.com/damnitjoshua" target="_blank" rel="noopener">Dribbble</a>
          <a href="https://github.com/damnitjoshua" target="_blank" rel="noopener">GitHub</a>
          <a href="mailto:joshuachew8118@gmail.com" target="_blank" rel="noopener">Email</a>
          <a href="https://telegram.me/damnitjoshua" target="_blank" rel="noopener">Telegram</a>
          <a href="https://wa.me/+60122550871" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </header>

      <article className={styles.project}>
        <h1>Projects</h1>

        <div className={styles.projectCon}>
          <a href="https://covidmalaysia.netlify.app" target="_blank" rel="noopener">
            <h2>Covid Malaysia</h2>
            <h3>Daily Covid-19 Tracking in Malaysia.</h3>
          </a>
          <a href="https://eggventure.netlify.app" target="_blank" rel="noopener">
            <h2>Egg Venture Technology</h2>
            <h3>Homepage and Covid Tracking for Egg Venture.</h3>
          </a>
          <a href="https://dribbble.com/shots/7688660-StepUp-healthcare-app?utm_source=Clipboard_Shot&utm_campaign=damnitjoshua&utm_content=StepUp%20-%20healthcare%20app&utm_medium=Social_Share" target="_blank" rel="noopener">
            <h2>StepUp</h2>
            <h3>Concept app that helps you focus on your wellbeing.</h3>
          </a>
          
          <Link href="/_app.js" rel="prefetch">
            <div className={styles.link}>
              View more
            </div>
          </Link>
        </div>
      </article>
    </div>
  )
}
