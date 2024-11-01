import headerImage from "../../assets/header_image.jpg";
import styles from "./header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={headerImage} alt="Coffee Beans Background" className={styles.backgroundImage} />
            <div className={styles.textContainer}>
                <h1 className={styles.mainText}>We Love Coffee</h1>
                <p className={styles.subText}>And all the people who make it</p>
            </div>
        </header>
    );
};
