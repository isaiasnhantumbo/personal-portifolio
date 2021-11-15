import Link from 'next/link';
import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

export function Navigation() {
  return (
    <header className={styles.container}>
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
    </header>
  );
}
