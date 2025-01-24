import Head from 'next/head'
import { Projetos } from '../components/Projetos'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
          <title>Home | ig.news</title>
      </Head>

      <section className={styles.contentContainer}>
          <div className={styles.hero}>
              <span>🤙 Olá,</span>
              <h1>Bem-vindo ao meu <span>Portfólio.</span></h1>
              <p>
                Descubra um pouco sobre mim e <br />
                sobre meu <span>mundo.</span>
              </p>
          </div>
          <div className={styles.imgWrapper}>
              <img src="/images/eusp.png" alt="Eu"/>
          </div>
      </section>

      <section className={styles.containerSobreMim}>

          <h1>Sobre mim</h1>
        
          <div className={styles.heroSobreMim}>
              <figure className={styles.cardSobreMim}>  
                  <blockquote>
                    Meu nome é Bernardo Maia Detomi, nasci em 2002
                    <div className={styles.arrowSobreMim}></div>  
                  </blockquote>  
                  <img src="/images/eupadrao.jpg" alt="Eu" />  
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
                    <h5>Eu & minha mãe</h5>  
                  </div>  
              </figure>  

              <figure className={styles.cardSobreMim}>  
                    <blockquote>
                      
                      <div className={styles.arrowSobreMim}></div>  
                    </blockquote>  
                    <img src="/images/home.jpg" alt="Eu e amigos" />  
                    <div id='oi' className={styles.descricaoSobreMim}>  
                      <h5>eu & Amigos</h5>  
                    </div>  
              </figure>  
          </div>
      </section>

      <Projetos/>

      
    </>


  )
}