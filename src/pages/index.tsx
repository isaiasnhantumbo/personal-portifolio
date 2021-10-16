import Head from 'next/head';
import Image from 'next/image';
import { Hero } from '../components/Hero';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Portfolio Page</title>
        <meta name="description" content="Simple Portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
      </main>

      <footer className={styles.footer}>
        <span>Madelyn Torff 2021 </span>
      </footer>
    </div>
  );
}
