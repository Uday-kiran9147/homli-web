import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Modern Gradients */}
      <div className={styles.gradientBlob1}></div>
      <div className={styles.gradientBlob2}></div>

      <div className={`container ${styles.heroGrid}`}>
        <div className="space-y-8 max-w-xl">
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            The #1 Family Organizer
          </div>
          <h1 className={styles.title}>
            Organize every home you belong to.
          </h1>
          <p className={styles.description}>
            Struggling to manage your own home while helping with your parents' household? Homli keeps everything separated yet accessible.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="#download" className="btn btn-primary text-lg px-8">
              Get Started Free
            </Link>
            <Link href="#features" className="btn btn-secondary text-lg px-8">
              Learn More
            </Link>
          </div>
          <div className={styles.trustedBy}>
            <div className={styles.avatars}>
               {[1,2,3,4].map(i => (
                 <div key={i} className={styles.avatar}></div>
               ))}
            </div>
            <p className={styles.trustedText}>Trusted by 10,000+ families</p>
          </div>
        </div>

        <div className={styles.imageWrapper}>
           <div className={styles.appImage}>
              <Image 
                src="/assets/hero-3d.png" 
                alt="Homli App Interface" 
                fill 
                className="object-cover"
                priority
              />
           </div>
           
           {/* Floating Elements - Modern Glass */}
           {/* Bill Alert */}
           <div className={`${styles.floatingCard} ${styles.cardBill}`}>
              <div className={styles.cardContent}>
                 <div className={styles.cardIcon}>⚡</div>
                 <div>
                    <p className={styles.cardTitle}>Bill Alert</p>
                    <p className={styles.cardSubtitle}>Electricity Due Tomorrow</p>
                 </div>
              </div>
           </div>

           {/* Grocery Alert */}
           <div className={`${styles.floatingCard} ${styles.cardGrocery}`}>
              <div className={styles.cardContent}>
                 <div className={styles.cardIcon}>🛒</div>
                 <div>
                    <p className={styles.cardTitle}>Grocery List</p>
                    <p className={styles.cardSubtitle}>Mom added: Milk & Eggs</p>
                 </div>
              </div>
           </div>

           {/* Chore Alert */}
           <div className={`${styles.floatingCard} ${styles.cardChore}`}>
              <div className={styles.cardContent}>
                 <div className={styles.cardIcon}>🧹</div>
                 <div>
                    <p className={styles.cardTitle}>Chore Turn</p>
                    <p className={styles.cardSubtitle}>Rahul's turn: Dishes</p>
                 </div>
              </div>
           </div>

           {/* Event Alert */}
           <div className={`${styles.floatingCard} ${styles.cardEvent}`}>
              <div className={styles.cardContent}>
                 <div className={styles.cardIcon}>📅</div>
                 <div>
                    <p className={styles.cardTitle}>Family Event</p>
                    <p className={styles.cardSubtitle}>Dad's Birthday Dinner</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
