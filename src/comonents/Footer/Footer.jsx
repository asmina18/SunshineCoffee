import styles from './footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerSection}>
      <h3>Contact</h3>
      <p>Supercoffeeroad 223b</p>
      <p>92230 New Coffeeland</p>
      <p>Phone: 22331122</p>
      <p>Mail: coffeeland@info.com</p>
    </div>
    <div className={styles.footerSection}>
      <h3>Legal</h3>
      <ul>
        <li><a href="#">Cookie policy</a></li>
        <li><a href="#">Return policy</a></li>
        <li><a href="#">Shipping</a></li>
        <li><a href="#">Terms and Conditions</a></li>
      </ul>
    </div>
    <div className={styles.footerSection}>
      <h3>About</h3>
      <ul>
        <li><a href="#">History</a></li>
        <li><a href="#">The people behind</a></li>
        <li><a href="#">Partnerships</a></li>
        <li><a href="#">International</a></li>
      </ul>
    </div>
  </footer>
);




