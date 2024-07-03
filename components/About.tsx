import React from 'react';
import styles from './About.module.css';
interface AboutProps {
  description: string;
}
const About: React.FC <AboutProps> = ({description}) => (
  <section className={styles.about} data-aos="fade-left">
    <h2>Sobre mí:</h2>
    <p className={styles.p}>{description}</p>
  </section>
);

export default About;
