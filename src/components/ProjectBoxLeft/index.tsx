import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';
import { motion } from 'framer-motion';

interface ProjectBoxProps {
  imageSrc: string;
}

export function ProjectBoxLeft({ imageSrc }: ProjectBoxProps) {
  return (
    <motion.div
      className={styles.container}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <Image src={imageSrc} alt="Project image" width="496" height="524" />
      <div className={styles.projectDetails}>
        <h1>Project Name</h1>
        <p>
          I created this personal project in order to show how to create an
          interface in Figma using a portfolio as an example.
        </p>
        <motion.button whileHover={{ scale: 1.1 }}>View Project</motion.button>
      </div>
    </motion.div>
  );
}
