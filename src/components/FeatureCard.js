import Image from 'next/image';
import styles from './FeatureCard.module.css';

export default function FeatureCard({ iconImage, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.visualArea}>
        <div className={styles.visualPattern}></div>
        <div className={styles.iconWrapper}>
          <Image src={iconImage} alt={title} fill className="object-contain" />
        </div>
      </div>
      <div className={styles.contentArea}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.arrow}>
          Learn more <span>→</span>
        </div>
      </div>
    </div>
  );
}
