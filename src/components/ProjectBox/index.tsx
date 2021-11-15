import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

interface ProjectBoxProps {
  imageSrc: string;
}

export function ProjectBox({imageSrc}: ProjectBoxProps) {
  return (
    <div className={styles.container}>
      <div className={styles.projectDetails}>
        <h1>Project Name</h1>
        <p>
          I created this personal project in order to show how to create an
          interface in Figma using a portfolio as an example.
        </p>
        <button>View Project</button>
      </div>
      <Image
        src={imageSrc}
        alt="Project image"
        width="496"
        height="524"
      />
    </div>
  );
}
