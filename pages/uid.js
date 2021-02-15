import styles from '../styles/Blog.module.css'
import Link from 'next/link'


export default function uid() {
  return (
    <div>
      <header className={styles.header}>
        <h1>404</h1>
        <h2>This page is not developed yet, just a placeholder for now. Maybe im just lazy who knows.</h2>
      </header>
      <Link href="/projects" rel="prefetch">
        <div className={styles.link}>
          Back to projects
        </div>
      </Link>
    </div>
  );
}
