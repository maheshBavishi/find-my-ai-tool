import React from 'react'
import styles from './navbar.module.scss';
const Logo = '/assets/logo/logo.webp';
export default function Navbar() {
  return (
    <header className={styles.header}>
        <div className='container'>
            <div className={styles.headerAlignment}>
                <div className={styles.leftContent}>
                    <img src={Logo} alt="Logo"/>
                    <nav>
                        <a>Home</a>
                        <a>AI Tools Category</a>
                        <a>GPT Store</a>
                        <a>AI Shorts Video</a>
                        <a>Blog</a>
                        <a>Submit AI Tool</a>
                    </nav>
                </div>
                <div className={styles.rightContent}>
                    <button>Log in</button>
                </div>
            </div>
        </div>
    </header>
  )
}
