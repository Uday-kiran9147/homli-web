import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Features />

      {/* Why Homli Section - Modern Split */}
      <section id="why-homli" className={styles.whySection}>
        <div className={`container ${styles.whyGrid}`}>
          <div className="order-2 md:order-1 relative">
             <div className={styles.blob1}></div>
             <div className={styles.blob2}></div>
             
             <div className={styles.whyImageContainer}>
                <div className={styles.whyImage}>
                  {/* Placeholder for lifestyle image - Modern */}
                  <div className={styles.lifestylePlaceholder}>
                    <span className={styles.lifestyleText}>LIFESTYLE IMAGE</span>
                  </div>
                </div>
             </div>
          </div>
          <div className={`${styles.whyContent} order-1 md:order-2`}>
            <div>
              <h2 className={styles.whyTitle}>Why choose Homli?</h2>
              <p className={styles.whySubtitle}>Designed for modern families, joint families, and shared living.</p>
            </div>

            <div className="space-y-10">
              <div className={styles.featureRow}>
                <div className={`${styles.featureIcon} ${styles.iconBrain}`}>🧠</div>
                <div>
                  <h3 className={styles.featureTitle}>The "Peace of Mind"</h3>
                  <p className={styles.featureDesc}>Run your home—and help run theirs. Manage multiple households without the chaos.</p>
                </div>
              </div>

              <div className={styles.featureRow}>
                <div className={`${styles.featureIcon} ${styles.iconBolt}`}>⚡</div>
                <div>
                  <h3 className={styles.featureTitle}>Simple & Fast</h3>
                  <p className={styles.featureDesc}>Designed for quick updates, working smoothly even on older phones. One app. Two homes. Zero confusion.</p>
                </div>
              </div>

              <div className={styles.featureRow}>
                <div className={`${styles.featureIcon} ${styles.iconHand}`}>🤝</div>
                <div>
                  <h3 className={styles.featureTitle}>The "Generational" Bridge</h3>
                  <p className={styles.featureDesc}>For the busy child managing their parents' home: We see you. Homli centralizes domestic management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section - Modern Gradient */}
      <section id="download" className={styles.downloadSection}>
        <div className={styles.downloadBg}></div>
        <div className={styles.downloadGlow}></div>
        
        <div className={`container ${styles.downloadContent}`}>
          <h2 className={styles.downloadTitle}>Ready to bring harmony to your home?</h2>
          <p className={styles.downloadText}>
            Download Homli today and start organizing your household with ease.
          </p>
          <div className={styles.storeButtons}>
            <button className={`${styles.storeButton} ${styles.appStore}`}>
              <span className={styles.storeIcon}></span>
              <div className="text-left">
                <div className={styles.storeTextSmall}>Download on the</div>
                <div className={styles.storeTextLarge}>App Store</div>
              </div>
            </button>
            <button className={`${styles.storeButton} ${styles.googlePlay}`}>
              <span className={styles.storeIcon}>▶</span>
              <div className="text-left">
                <div className={styles.storeTextSmall}>GET IT ON</div>
                <div className={styles.storeTextLarge}>Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
