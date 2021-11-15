import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

export function Navigation() {
  return (
    <motion.header
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70 }}
    >
      <Link href="/">
        <a>Madelyn Torff</a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/about">
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
    </motion.header>
  );
}
