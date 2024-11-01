import styles from './InfoCart.module.scss';
import image from '../../assets/Rectangle2.png';
import image1 from '../../assets/Rectangle3.png';
import image2 from '../../assets/Rectangle4.png';

export const InfoCart = () => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.itemCard}>
        <figure>
        <figcaption>
        <h3>The right beans</h3>
        <p>
          Our journey begins with a deep-rooted connection to the land, as we seek
          out farmers who uphold environmentally-friendly practices and prioritize
          the well-being of their communities. Through personal relationships and
          mutual respect, we collaborate closely with these farmers, understanding
          their methods and values.
        </p>
        </figcaption>
          <img src={image} alt="The right beans sourced responsibly" />
        </figure>
        <figure>
          <figcaption>
          <h3>Carefully handled</h3>
          <p>
            Each bean is carefully handpicked at the peak of ripeness, ensuring
            optimal flavor and aroma. We embrace diversity in our selection,
            cherishing the unique characteristics of each region and varietal. From
            the lush mountainsides to the sun-kissed valleys, we traverse the
            landscapes in search of perfection.
          </p>
          </figcaption>
          <img src={image1} alt="Carefully handled beans for optimal flavor" />
        </figure>

        <figure>
          <figcaption>
          <h3>From us to you</h3>
        <p>
          Our commitment to organic farming means that our beans are free from
          harmful chemicals, allowing the natural flavors to shine through. We
          believe in transparency and traceability, providing our customers with a
          genuine connection to the origins of their coffee.
        </p>
          </figcaption>
          <img src={image2} alt="From our hands to your cup" />
        </figure>
      </div>
    </div>
  );
};