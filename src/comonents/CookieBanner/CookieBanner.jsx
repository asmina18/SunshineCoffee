// src/components/CookieBanner.js

import { useState} from 'react';
import styles from './coockie.module.scss';

export function CookieBanner() {
  // Tjekker, om brugeren allerede har accepteret cookies
  const [isAccepted, setIsAccepted] = useState(() => {
    // Initial værdi - tjekker kun `localStorage` én gang ved initialisering
    return localStorage.getItem('cookiesAccepted') === 'true';
  });

  const handleAccept = () => {
    // Sætter accept-status til 'true' og gemmer det i localStorage
    localStorage.setItem('cookiesAccepted', 'true');
    setIsAccepted(true);
  };

  if (isAccepted) {
    // Returner ingenting, hvis cookies allerede er accepteret
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        <p className={styles.text}>
          Denne hjemmeside bruger cookies for at forbedre din oplevelse. Ved at fortsætte accepterer du vores brug af cookies.
        </p>
        <button className={styles.button} onClick={handleAccept}>
          Acceptér
        </button>
      </div>
    </div>
  );
}
