"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className={styles.logoContainer}>
            <Image src="/assets/logo.jpg" alt="Homli Logo" fill className="object-cover" />
          </div>
          <span className={styles.logoText}>Homli</span>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.navLinks}>
          <Link href="#features" className={styles.navLink}>Features</Link>
          <Link href="#why-homli" className={styles.navLink}>Why Homli</Link>
          <Link href="#testimonials" className={styles.navLink}>Reviews</Link>
        </div>

        <div className="hidden md-block">
          <Link href="#download" className="btn btn-primary">
            Download App
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuBtn} onClick={() => setIsOpen(!isOpen)}>
          <div className={`${styles.hamburgerLine} ${isOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ transform: isOpen ? 'rotate(45deg) translate(0, 6px)' : 'none' }}></div>
          <div className={`${styles.hamburgerLine} ${isOpen ? 'opacity-0' : ''}`} style={{ opacity: isOpen ? 0 : 1 }}></div>
          <div className={`${styles.hamburgerLine} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ transform: isOpen ? 'rotate(-45deg) translate(0, -6px)' : 'none' }}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link href="#features" className={styles.navLink} onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#why-homli" className={styles.navLink} onClick={() => setIsOpen(false)}>Why Homli</Link>
          <Link href="#download" className="btn btn-primary text-center w-full" onClick={() => setIsOpen(false)}>Download App</Link>
        </div>
      )}
    </nav>
  );
}
