import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
      <header>
        <a href="#">Madelyn Torff</a>
        <nav>
          <ul>
            <li>
              <Link href="#">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="#contacts">
                <a>Contacts</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Hero />
      </main>

      <footer className={styles.footer}>
        <span>Madelyn Torff 2021 </span>
      </footer>
    </div>
  );
}
