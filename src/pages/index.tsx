import React from 'react';
import Head from 'next/head';

import { Hero } from '../components/Hero';
import { Navigation } from '../components/Navigation';
import { ProjectBox } from '../components/ProjectBox';
import { ProjectBoxLeft } from '../components/ProjectBoxLeft';

import styles from '../styles/Home.module.scss';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Portfolio Page</title>
        <meta name="description" content="Simple Portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
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
      <Footer />
    </div>
  );
}
