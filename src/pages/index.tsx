import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Hero } from '../components/Hero';
import { ProjectBox } from '../components/ProjectBox';
import { ProjectBoxLeft } from '../components/ProjectBoxLeft';

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
      <section id="projects" className={styles.projects}>
        <h2>
          Projects <div className={styles.borderBottom} />
        </h2>
        <ProjectBox imageSrc="/project-image.png" />
        <ProjectBoxLeft imageSrc="/project-image.png" />
        <ProjectBox imageSrc="/project-image2.png" />
      </section>
      <footer className={styles.footer}>
        <div>
          <Image
            className={styles.image}
            src="/icons/instagram.svg"
            alt="Instagram Logo"
            width="48"
            height="48"
          />
          <Image
            className={styles.image}
            src="/icons/linkedin.svg"
            alt="Linkedin Logo"
            width="48"
            height="48"
          />
          <Image
            className={styles.image}
            src="/icons/mail.svg"
            alt="Email Logo"
            width="48"
            height="48"
          />
        </div>
        <span>Madelyn Torff 2021 </span>
      </footer>
    </div>
  );
}
