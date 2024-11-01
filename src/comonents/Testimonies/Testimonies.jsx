import styles from "./testi.module.scss"


export const Testimonies = () => {
    const testimonies = [
        { name: 'John', text: 'Sunshine Coffee really delivers a great product. I love their coffee and the guided flow is great...' },
        { name: 'Eva', text: 'Sunshine Coffee really delivers a great product. I love their coffee and the guided flow is great...' },
        { name: 'Peter', text: 'Sunshine Coffee really delivers a great product. I love their coffee and the guided flow is great...' },
        { name: 'Michelle', text: 'Sunshine Coffee really delivers a great product. I love their coffee and the guided flow is great...' },
    ];

    return (
        <div className={styles.testimonies}>
            <h2>Testimonies</h2>
            <div className={styles.testimonyList}>
                {testimonies.map((item, index) => (
                    <div key={index} className="testimony-item">
                        <h3>{item.name}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


