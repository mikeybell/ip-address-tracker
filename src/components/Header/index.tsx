import React from 'react';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>IP Address Tracker</h1>
      <input
        className={styles.input}
        placeholder="Search for any IP address or domain"
        type="text"
      />
      <div className={styles.results}>
        <div className={styles.result}>
          <h2 className={styles.resultTitle}>IP Address</h2>
          <p>Result</p>
        </div>
        <div className={styles.result}>
          <h2 className={styles.resultTitle}>Location</h2>
          <p>Result</p>
        </div>
        <div className={styles.result}>
          <h2 className={styles.resultTitle}>Timezone</h2>
          <p>Result</p>
        </div>
        <div className={styles.result}>
          <h2 className={styles.resultTitle}>ISP</h2>
          <p>Result</p>
        </div>
      </div>
    </header>
  )
};