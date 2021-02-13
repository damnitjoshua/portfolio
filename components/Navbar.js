import React, { Component } from 'react';
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

class Navbar extends Component {
    render() {
        return (
            <nav className={styles.nav} >
                <Link href="/">
                    <div className={styles.link}>@damnitjoshua</div>
                </Link>
                <div className={styles.iconcon}>
                    <a target="_blank" rel="noopener noreferrer external" href="https://twitter.com/damnitjoshua_" aria-label="Twitter: damnitjoshua">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                    </a>
                    <a href="https://instagram.com/damnitjoshua" target="_blank" rel="noopener noreferrer external" role="link" aria-label="Instagram: damnitjoshua">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path></svg>
                    </a>
                    <a href="https://github.com/damnitjoshua" target="_blank" rel="noopener noreferrer external" role="link" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path></svg>
                    </a>
                </div>
            </nav>
        );
    }
}

export default Navbar;