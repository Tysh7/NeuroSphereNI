// App.js
import React from 'react';
import FlashcardsSection from './FlashCardsSection';
import styles from './App.module.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <header className={styles.header}>
          <h1>Welcome to NeuroSphere NI</h1>
          <nav className={styles.navbar}>
            <ul>
              <li><Link to="/about" className={styles.navLink}>ABOUT</Link></li>
              <li><a href="#" className={styles.navLink}>RESOURCES</a></li>
              <li><a href="#" className={styles.navLink}>ARTICLES</a></li>
              <li><a href="#" className={styles.navLink}>ACTIVITIES</a></li>
              <li><a href="#" className={styles.navLink}>CONTACT</a></li>
            </ul>
          </nav>
        </header>
        <div className={styles.banner}></div>
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
