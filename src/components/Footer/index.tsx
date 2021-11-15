import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
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
  );
}
