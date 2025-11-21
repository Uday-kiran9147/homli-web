import FeatureCard from './FeatureCard';
import styles from './Features.module.css';

export default function Features() {
  const features = [
    {
      iconImage: "/assets/icon-grocery.png",
      title: "Smart Grocery Lists",
      description: "Real-time grocery lists for each household. Mark items as 'Urgent' so the person shopping knows exactly what to buy."
    },
    {
      iconImage: "/assets/icon-calendar.png",
      title: "Shared Family Calendar",
      description: "Never miss a family event again. Add birthdays, poojas, dinners, or school meetings. Detect schedule conflicts instantly."
    },
    {
      iconImage: "/assets/icon-bills.png",
      title: "Bill Reminders",
      description: "Track rent, electricity, internet, and more. Set due dates and recurring cycles for each home so you never pay a late fee."
    },
    {
      iconImage: "/assets/icon-grocery.png", // Reusing for now as we only generated 3 specific ones
      title: "Multi-Family Support",
      description: "Create or join multiple distinct family groups. Switch between your 'Home,' 'Parents,' or 'Rental' dashboards instantly."
    },
    {
      iconImage: "/assets/icon-calendar.png", // Reusing
      title: "Chore Tracking",
      description: "Assign tasks to kids, roommates, or yourself. Rotate chores automatically and track who did what."
    },
    {
      iconImage: "/assets/icon-bills.png", // Reusing
      title: "Role-Based Access",
      description: "You can be an Admin at home (full control) but a Guest at your shared flat (view-only). Secure and flexible."
    }
  ];

  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Everything you need to run your home</h2>
          <p className={styles.subtitle}>Homli gives you the modern tools to manage the mental load of household management.</p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
