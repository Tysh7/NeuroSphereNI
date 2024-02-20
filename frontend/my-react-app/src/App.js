import React from 'react';
import FlashcardsSection from './FlashCardsSection'; // Import the FlashcardsSection component
import styles from './App.module.css';
import './App.css';

function App() {
  return (
    <div>
      <header className={styles.header}>
        <h1>Welcome to NeuroSphere NI</h1>
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#" className={styles.navLink}>ABOUT</a></li>
            <li><a href="#" className={styles.navLink}>RESOURCES</a></li>
            <li><a href="#" className={styles.navLink}>ARTICLES</a></li>
            <li><a href="#" className={styles.navLink}>ACTIVITIES</a></li>
            <li><a href="#" className={styles.navLink}>CONTACT</a></li>
          </ul>
        </nav>
      </header>
      <div className={styles.banner}></div>
      <main>
        <p>This is the main content of my homepage.</p>
        <FlashcardsSection /> {/* Include the FlashcardsSection component here */}
      </main>
    </div>
  );
}

export default App;
