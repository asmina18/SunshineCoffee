import PropTypes from 'prop-types';
import styles from '../ProductList/style.module.scss';

export const ProductCard = ({ product, onClick, addToCart }) => {
  if (!product) return null;

  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <h3 className={styles.productTitle}>{product.name}</h3>
      <div className={styles.productImageContainer}>
    <img src={product.imageUrl || product.image} alt={product.name} className={styles.productImage} />
  </div>
      <div className={styles.productInfo}>
        <p className={styles.roastText}>Roast:</p>
        <div className={styles.roastLevelDots}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={index < product.roast ? styles.dotActive : styles.dotInactive}
            >•</span>
          ))}
        </div>
        <p className={styles.priceLabel}>{product.price} DKK</p>
      </div>

      <button
        className={styles.cartButton}
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    roast: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};
