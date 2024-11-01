

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './navigation.module.scss';
import image1 from '../../assets/Male_User.jpg';
import image2 from '../../assets/Shopping_Cart.jpg';
import image3 from "../../assets/Coffee.jpg";
import { useAuth } from '../../contex/useAuth';

export const Navigation = () => {
  const [region, setRegion] = useState("Europa");
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setRegion(prevRegion => (prevRegion === "Europa" ? "Americas" : "Europa"  ));
  };

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.rightContainer}>
        <button className={styles.locationButton} onClick={toggleLanguage}>
          {region}
        </button>
        <Link to="/cart">
          <img src={image2} alt="Cart Icon" className={styles.icon} />
        </Link>
        <button onClick={handleProfileClick} className={styles.iconButton}>
          <img src={image1} alt="User Icon" className={styles.icon} />
        </button>
      </div>
      {/* Center Logo */}
      <div className={styles.centerContainer}>
        <span className={styles.title}>Sunshine Coffee</span>
        <Link to="/" className={styles.logoCircle}>
          <img src={image3} alt="Coffee Cup Logo" className={styles.logo} />
        </Link>
      </div>
    </nav>
  );
};
