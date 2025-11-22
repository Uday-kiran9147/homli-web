import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <div className={styles.logoWrapper}>
               <Image src="/assets/logo.png" alt="Homli Logo" fill className="object-cover" />
            </div>
            <span className={styles.brandName}>Homli</span>
          </div>
          <p className={styles.brandDesc}>
            The first family organizer built to handle multiple family groups seamlessly. Bring harmony to every home you manage.
          </p>
          <div className={styles.socialIcons}>
            {/* Social Placeholders - Modern */}
            <div className={styles.socialIcon}>𝕏</div>
            <div className={styles.socialIcon}>In</div>
            <div className={styles.socialIcon}>Ig</div>
          </div>
        </div>

        <div>
          <h4 className={styles.heading}>Product</h4>
          <ul className={styles.linkList}>
            <li><Link href="#features" className={styles.link}>Features</Link></li>
            <li><Link href="#why-homli" className={styles.link}>Why Homli</Link></li>
            <li><Link href="#download" className={styles.link}>Download</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Legal</h4>
          <ul className={styles.linkList}>
            <li><Link href="#" className={styles.link}>Privacy Policy</Link></li>
            <li><Link href="#" className={styles.link}>Terms of Service</Link></li>
            <li><Link href="#" className={styles.link}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Homli App. All rights reserved.
      </div>
    </footer>
  );
}
