import styles from  "./shopnow.module.scss"
import { useNavigate } from 'react-router-dom';

export const ShopNow = () => {
  const navigate = useNavigate();

  const handleGoToProducts = () => {
    navigate('/products');
  };

  return (
    <div className={styles.shopNow}>
      <h2>Shop now</h2>
      <p>
        Our delicious coffees will get you brewing the best cup of coffee you
        ever tasted in no time at all. And the best part of it? It is totally
        organic, fair trade, and sustainably sourced. So get brewing.
      </p>
      <button onClick={handleGoToProducts}>Go to products</button>
    </div>
  );
};

