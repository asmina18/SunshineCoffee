import PropTypes from 'prop-types';
import styles from './productCard.module.scss';


export const ProductCard = ({ product, onClick, addToCart }) => {
  if (!product) return null;

  return (
    <div className={styles.card} onClick={onClick}>
      <h3 className={styles.productName}>{product.name}</h3>
      <img src={product.imageUrl || product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.productDetails}>
        <p className={styles.roastLabel}>Roast:</p>
        <div className={styles.roastLevel}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={index < product.roast ? styles.activeDot : styles.inactiveDot}
            >
              ●
            </span>
          ))}
        </div>
        <p className={styles.price}>{product.price} DKK</p>
      </div>
      <button
        className={styles.addToCartButton}
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


