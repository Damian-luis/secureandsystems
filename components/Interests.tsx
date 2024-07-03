import React from 'react';
import styles from './Interests.module.css';
interface InterestsProps {
  interests: string [];
}
const Interests: React.FC <InterestsProps> = ({interests=[]}) => (
  <section className={styles.interests}>
    <h2>Intereses</h2>
    <ul className={styles.ul}>
      { interests.map((e)=>{ return <li className={styles.li} data-aos="fade-right">{e}</li>})}
    </ul>
  </section>
);

export default Interests;
