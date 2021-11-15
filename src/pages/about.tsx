import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

import styles from '../styles/About.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.hero}>
        <div>
          <h1>About me</h1>
          <h4>
            Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
            neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed
            cras sed. Aliquet risus posuere aliquet imperdiet sit.
          </h4>
          <Button>Resume</Button>
        </div>
        <svg
          viewBox="0 0 524 524"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="262" cy="262" r="262" fill="#FDC435" />
          <image xlinkHref="/profile-image.png" />
        </svg>
      </div>
      <Footer />
    </div>
  );
}
