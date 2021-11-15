import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  isOutlined?: boolean;
  children: ReactNode;
}

export function Button({ isOutlined, children }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className={`${styles.btn} ${isOutlined ? styles.outlined : ''}`}
    >
      {children}
    </motion.button>
  );
}
