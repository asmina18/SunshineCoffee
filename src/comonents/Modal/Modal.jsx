
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

export const Modal = ({ product, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>X</button>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} className={styles.modalImage} />
        <p>{product.description}</p>
        <p>Price: {product.price} DKK</p>
      </div>
    </div>
  );
};

// Добавляем propTypes для проверки типов пропсов
Modal.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

