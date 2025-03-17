import styles from './footer.module.scss'
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Footer: React.FC = () => {
    const whatsappMessage = "Olá! Gostaria de mais informações sobre seus serviços."
    const whatsappLink = `https://wa.me/5532999052029?text=${encodeURIComponent(whatsappMessage)}`

    return(
        <footer className={styles.footer}>
            <section className={styles.footerText}>
                <div className={styles.content}>
                    <h1>Contatos</h1>
                    <div className={styles.contactContainer}>
                        <div className={styles.contact}>
                            <p>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className={styles.contactIcon} />
                                    <span>(32) 99905-2029</span>
                                </a>
                            </p>
                            <p className={styles.contactBlocoGmail}>
                                <a href="mailto:bernardomd01@gmail.com">
                                    <FaEnvelope className={styles.contactIcon} />
                                    <span>bernardomd01@gmail.com</span>
                                </a>
                            </p>
                            <p>
                                <a>BMD Informática</a>
                            </p>
                        </div>
                        <div className={styles.socialLinks}>
                            <a href="https://instagram.com/bernardoo.md" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className={styles.instagramIcon} />
                                <span>@bernardoo.md</span>
                            </a>
                            <a href="https://instagram.com/bmdinformatica" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className={styles.instagramIcon} />
                                <span>@bmdinformatica</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.rights}>
                <h2>BMD © - 2025 - Todos os direitos reservados - Designed by BernardoMD</h2>
            </section>
        </footer>
    );
};

export default Footer;