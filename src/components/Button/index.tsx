import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  isOutlined?: boolean;
  children: ReactNode;
}

export function Button({ isOutlined, children }: ButtonProps) {
  return (
    <button className={`${styles.btn} ${isOutlined ? styles.outlined : ''}`}>
      {children}
    </button>
  );
}
