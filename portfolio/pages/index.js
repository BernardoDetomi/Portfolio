import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu Portfólio Futurista</title>
        <meta name="description" content="Portfólio de tecnologia e inovação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.profile}>
          <img src="/profile-photo.jpeg" alt="Minha Foto" className={styles.photo} />
          <h1 className={styles.name}>Seu Nome</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;