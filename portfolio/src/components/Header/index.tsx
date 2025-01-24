import { useState } from 'react';
import styles from './styles.module.scss'

export function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                 <img src="/images/logo.png" alt="logo" className={styles.logoImage} />
                 
                 <div className={styles.hamburger} onClick={toggleMenu}>
                     <span className={isMenuOpen ? styles.active : ''}></span>
                     <span className={isMenuOpen ? styles.active : ''}></span>
                     <span className={isMenuOpen ? styles.active : ''}></span>
                 </div>

                 <nav className={isMenuOpen ? styles.active : ''}>
                     <a href="#home">Home</a>
                     <a href="#sobremim">Sobre Mim</a>
                     <a href="#projetos">Projetos</a>
                     <a href="#contato">Contato</a>
                 </nav>

            </div>
        </header>
    );
}