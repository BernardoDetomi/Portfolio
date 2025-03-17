import Head from 'next/head'
import { Projetos } from '../components/Projetos'
import { Certificados } from '../components/Certificados'
import styles from './Home.module.scss'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
          <title>Portfólio | BMD</title>
      </Head>

      <section id="home" className={styles.contentContainer}>
          <div className={styles.hero}>
              <span>🤙 Olá,</span>
              <h1>Bem-vindo ao meu <span>Portfólio.</span></h1>
              <p>
                Descubra um pouco sobre mim e sobre meu <span>mundo.</span>
              </p>
          </div>
          <div className={styles.imgWrapper}>
              <img src="/images/home.jpg" alt="Eu"/>
          </div>
      </section>

      <section id="sobre" className={styles.containerSobreMim}>
          <h1>Sobre mim</h1>
        
          <div className={styles.heroSobreMim}>
              <figure className={styles.cardSobreMim}>  
                  <blockquote>
                    Meu nome é Bernardo Maia Detomi, nasci em 2002
                    <div className={styles.arrowSobreMim}></div>  
                  </blockquote>  
                  <img src="/images/home.jpg" alt="Eu" />  
                  <div className={styles.descricaoSobreMim}>  
                    <h5>Eu</h5>  
                  </div>  
              </figure>

              <figure className={styles.cardSobreMim}>  
                  <blockquote>
                    Estou cursando Ciência da Computação na UFSJ.
                    <div className={styles.arrowSobreMim}></div>  
                  </blockquote>  
                  <img src="/images/home.jpg" alt="eu e minha familia" />  
                  <div className={styles.descricaoSobreMim}>  
                    <h5>Eu</h5>  
                  </div>  
              </figure>  

              <figure className={styles.cardSobreMim}>  
                    <blockquote>
                      Atualmente sou estagiário no SETIR da UFSJ e também faço parte da LinkedEJ do curso de Ciência da Computação da UFSJ.
                      <div className={styles.arrowSobreMim}></div>  
                    </blockquote>  
                    <img src="/images/home.jpg" alt="Eu e amigos" />  
                    <div id='oi' className={styles.descricaoSobreMim}>  
                      <h5>Eu</h5>  
                    </div>  
              </figure>  
          </div>
      </section>

      <section id="projetos">
          <Projetos/>
      </section>

      <section id="certificados">
          <Certificados/>
      </section>

      <section id="contato" className={styles.containerContato}>
          <h1>Contato</h1>
          
          <div className={styles.heroContato}>
              <div className={styles.cardContato}>
                  <a href="mailto:bernardomd01@gmail.com">
                      <img src="/images/email.png" alt="Email" />
                      <h3>Email</h3>
                      <p>bernardomd01@gmail.com</p>
                  </a>
              </div>

              <div className={styles.cardContato}>
                  <a href="https://www.linkedin.com/in/bernardo-maia-detomi-7621a51b9/" target="_blank" rel="noopener noreferrer">
                      <img src="/images/linkedin.png" alt="LinkedIn" />
                      <h3>LinkedIn</h3>
                      <p>Bernardo Maia Detomi</p>
                  </a>
              </div>

              <div className={styles.cardContato}>
                  <a href="https://github.com/BernardoDetomi" target="_blank" rel="noopener noreferrer">
                      <img src="/images/github.png" alt="GitHub" />
                      <h3>GitHub</h3>
                      <p>github.com/BernardoDetomi</p>
                  </a>
              </div>
          </div>
          <Footer></Footer>
      </section>
    </>
  )
}