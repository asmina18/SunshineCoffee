import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { Modal } from '../Modal/Modal';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8081/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={styles.productListContainer}>
      <h2>Our picks for you</h2>
      <div className={styles.productGrid}>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};
