import styles from './projetos.module.scss'
import { FaLaravel, FaVuejs, FaReact, FaGithub } from 'react-icons/fa'
import { SiFlutter, SiNextdotjs, SiFirebase } from 'react-icons/si'
import { IoPieChartSharp } from 'react-icons/io5'


export function Projetos (){
    return(
        <>  
            <h1 className={styles.cab}>Projetos</h1>
            <p className={styles.p}>
                Projetos que fiz como desenvolvedor.
            </p>
            <section className={styles.projetos}>

                <div className={styles.container}>

                    <div className={styles.card}>
                        <div className={styles.face1}>
                            <div className={styles.content}>
                            <span className={styles.stars}></span>
                            <h2 className={styles.yellow}>DentalLinked</h2><br />
                            <p className={styles.amarelo}>Site Web desenvolvido para uma clinica odontologica para o LinkedEJ.</p>
                            <a target="_blank" href="https://react.dev/"><FaReact className={styles.icons}/></a>
                            <a target="_blank" href="https://github.com/BernardoDetomi/DentalLinked"><FaGithub className={styles.icons}/></a>
                            </div>
                        </div>
                        <div className={styles.face2}>
                            <h2>01</h2>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.face1}>
                            <div className={styles.content}>
                            <span className={styles.stars}></span>
                            <h2 className={styles.azul}>Portfólio</h2><br />
                            <p className={styles.azul}>Portfólio feito para mim apenas para praticar e entender mais das tecnologias usadas.</p>
                            <a target="_blank" href="https://react.dev/"><FaReact className={styles.icons}/></a>
                            <a target="_blank" href="https://nextjs.org"><SiNextdotjs className={styles.icons}/></a>
                            </div>
                        </div>
                        <div className={styles.face2}>
                            <h2>02</h2>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.face1}>
                            <div className={styles.content}>
                            <span className={styles.stars}></span>
                            <h2 className={styles.amarelo}>BarberizeApp (Em desenvolvimento)</h2><br />
                            <p className={styles.amarelo}>O BarberizeApp será uma Aplicação Web que reunirá barbearia de minha cidade, com o intuito de facilitar o agendamento de cortes de barba e cabelo.</p>
                            <a target="_blank" href="https://react.dev/"><FaReact className={styles.icons}/></a>
                            <a target="_blank" href="https://nextjs.org"><SiNextdotjs className={styles.icons}/></a>
                            <a target="_blank" href="https://firebase.google.com"><SiFirebase className={styles.icons}/></a>
                            <a target="_blank" href="https://powerbi.microsoft.com/pt-br/"><IoPieChartSharp className={styles.icons}/></a>
                            <a target="_blank" href="https://github.com/BernardoDetomi/BarberizeApp"><FaGithub className={styles.icons}/></a>
                            </div>
                        </div>
                        <div className={styles.face2}>
                            <h2>03</h2>
                        </div>
                    </div>

                    </div>
                    <div className={styles.button}>
                        <a href="https://github.com/BernardoDetomi?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <h3>Saiba Mais...</h3>
                        </a>
                    </div>
            </section>
        </>
    );
}