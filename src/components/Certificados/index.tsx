import styles from './certificados.module.scss'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Certificado {
    id: number;
    titulo: string;
    instituicao: string;
    data: string;
    imagem: string;
    link: string;
}

const certificados: Certificado[] = [
    {
        id: 1,
        titulo: "Javascript - Full-stack Intermediário",
        instituicao: "Rocketseat",
        data: "2024",
        imagem: "/images/certificados/certificateRocketSeatIntermediario.jpg",
        link: "https://app.rocketseat.com.br/certificates/b5ea538d-6ad3-4aa7-9dc5-6ece328247a5"
    },
    {
        id: 2,
        titulo: "Javascript - Full-stack Iniciante",
        instituicao: "Rocketseat",
        data: "2024",
        imagem: "/images/certificados/certificateRocketSeatIniciante.jpg",
        link: "https://app.rocketseat.com.br/certificates/56c238d8-91a0-40dc-96b4-d90a81830158"
    },
    {
        id: 3,
        titulo: "FullStack Week",
        instituicao: "Full Stack Club",
        data: "2024",
        imagem: "/images/certificados/certificado.jpeg",
        link: "https://drive.google.com/file/d/1RV7uZ1h3PiHV0qGZGqDH9DX5JWlH0wFb/view?usp=drive_link"
    },
    {
        id: 4,
        titulo: "Linguagem Javascript",
        instituicao: "Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense",
        data: "2024",
        imagem: "/images/certificados/javascript.jpg",
        link: "https://mundi.ifsul.edu.br/ava/mod/simplecertificate/verify.php?code=65cd6b16-4dac-4dd6-ac2e-82b40a00c840"
    },
    {
        id: 5,
        titulo: "Linguagem PHP",
        instituicao: "Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense",
        data: "2024",
        imagem: "/images/certificados/php.jpg",
        link: "https://mundi.ifsul.edu.br/ava/mod/simplecertificate/verify.php?code=6758adcf-f3fc-4bda-b36e-d3960a00c840"
    },
    {
        id: 6,
        titulo: "Lógica de programação Avançada",
        instituicao: "DEV Samurai",
        data: "2023",
        imagem: "/images/certificados/logicaavancada.jpg",
        link: "https://drive.google.com/file/d/1fSeZQc0JS1B5tnQHA365Y90EA1vBLNIr/view?usp=drive_link"
    },
    // Adicione mais certificados conforme necessário
];

export function Certificados() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === certificados.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? certificados.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className={styles.certificadosSection}>
            <h1 className={styles.titulo}>Certificados</h1>
            <p className={styles.subtitulo}>Cursos e certificações que obtive durante minha jornada.</p>
            
            <div className={styles.carrosselContainer}>
                <button className={styles.navButton} onClick={prevSlide}>
                    <FaChevronLeft />
                </button>
                
                <div className={styles.carrossel}>
                    {certificados.map((certificado, index) => (
                        <div 
                            key={certificado.id}
                            className={`${styles.certificadoCard} ${
                                index === currentIndex ? styles.active : ''
                            }`}
                        >
                            <a href={certificado.link} target="_blank" rel="noopener noreferrer">
                                <img src={certificado.imagem} alt={certificado.titulo} />
                                <div className={styles.certificadoInfo}>
                                    <h3>{certificado.titulo}</h3>
                                    <p>{certificado.instituicao}</p>
                                    <span>{certificado.data}</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <button className={styles.navButton} onClick={nextSlide}>
                    <FaChevronRight />
                </button>
            </div>

            <div className={styles.indicadores}>
                {certificados.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicador} ${
                            index === currentIndex ? styles.active : ''
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </section>
    );
} 