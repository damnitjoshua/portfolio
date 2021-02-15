import styles from '../styles/Project.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function projects() {
    return (
        <div>
            <Head>
                <title>Joshua Chew - Projects</title>
                <link rel="canonical" href="https://damnitjoshua.vercel.app/projects" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="title" content="Joshua Chew - Projects" />
                <meta name="description" content="Front-end web developer and user interface designer based in Kuala Lumpur, Malaysia." />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Joshua Chew Jay Han" />
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
                <h1>Projects</h1>
                <h2>
                    Over the years, I have collaborated with many people to work on projects ranging from short films to health and safety guidelines. Below are some of the works I've been involved in.
                </h2>
            </header>

            <div className={styles.grid}>
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
                <a href="https://www.facebook.com/2000562909994618/posts/3470774206306807/?sfnsn=mo" target="_blank" rel="noopener noreferrer external" role="link" aria-label="Beach Cleanup sop">
                    <img
                        className={styles.img}
                        src="/bcu.webp"
                        alt="Photo of Joshua Chew"
                        loading="lazy"
                    />
                    <h2>Health and Safety Guideline Poster</h2>
                    <h3>Covid SOPs for Beach Cleanup Project 2020.</h3>
                    <span>DESIGN</span>
                </a>
                <a href="https://covidmalaysia.netlify.app" target="_blank" rel="noopener noreferrer external" role="link" aria-label="Covid Malaysia">
                    <img
                        className={styles.img}
                        src="/covmy.webp"
                        alt="Photo of Joshua Chew"
                        loading="lazy"
                    />
                    <h2>Covid Malaysia</h2>
                    <h3>Daily Covid-19 Tracking in Malaysia.</h3>
                    <span>CODE</span><span>DESIGN</span>
                </a>
                <div>
                    <Link href="/uid" rel="prefetch" role="link" aria-label="Assignment Submission System">
                        <div>
                            <img
                                className={styles.img}
                                src="/uid.webp"
                                alt="Photo of Joshua Chew"
                                loading="lazy"
                            />
                            <h2>Assignment Submission System</h2>
                            <h3>User Interface Design assignment.</h3>
                            <span>UNI ASSIGNMENT</span><span>DESIGN</span>
                        </div>
                    </Link>
                </div>
                <a href="https://dribbble.com/shots/7600365-Moist-App-water-tracker" target="_blank" rel="noopener noreferrer external" role="link" aria-label="Dribbble">
                    <img
                        className={styles.img}
                        src="/moistapp.webp"
                        alt="Moist app"
                        loading="lazy"
                    />
                    <h2>Moist App</h2>
                    <h3>Concept app that aims to help you stay hydrated throughout the day.</h3>
                    <span>DESIGN</span>
                </a>
                <a href="https://youtu.be/4ABgDTEBwxc" target="_blank" rel="noopener noreferrer external" role="link" aria-label="Daydream">
                    <img
                        className={styles.img}
                        src="/daydream.webp"
                        alt="Photo of Joshua Chew"
                        loading="lazy"
                    />
                    <h2>Daydream</h2>
                    <h3>Experimental short film.</h3>
                    <span>EDITOR</span><span>DESIGN</span>
                </a>
                <div>
                    <Link href="/uid" rel="prefetch" role="link" aria-label="Ketupat Productions">
                        <div>
                            <img
                                className={styles.img}
                                src="/ketupat.webp"
                                alt="Photo of Joshua Chew"
                                loading="lazy"
                            />
                            <h2>Ketupat Productions</h2>
                            <h3>Graphic designer and branding.</h3>
                            <span>DESIGN</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}