import React, { useState } from 'react';
import styles from './AddInterestCard.module.css';
interface HeaderProps {
  addInterest:(interest: string) => void;
}
const ContactForm: React.FC = ({addInterest}) => {
  const [newInterest, setNewInterest] = useState('');

  const handleAddInterest = () => {
    if (newInterest.trim()) {
      addInterest(newInterest.trim());
      setNewInterest('');
    } else {
      alert('Debes ingresar un interés');
    }
  };

  return (
    <section className={styles.contactForm}>
      <h2>Añadir interes</h2>
      <div className={styles.contactFormDown}>
      <input
        type="text"
        value={newInterest}
        onChange={(e) => setNewInterest(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleAddInterest} className={styles.button}>Añadir</button>
    </div>
    </section>
  );
};

export default ContactForm;
