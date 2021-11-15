import React from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          className={styles.image}
          src="/icons/instagram.svg"
          alt="Instagram Logo"
          width="48"
          height="48"
        />
        <motion.img
          whileHover={{ scale: 1.1 }}
          className={styles.image}
          src="/icons/linkedin.svg"
          alt="Linkedin Logo"
          width="48"
          height="48"
        />
        <motion.img
          whileHover={{ scale: 1.1 }}
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
