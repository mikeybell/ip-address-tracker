import React, { useEffect } from 'react';
import styles from './header.module.css';

const URL = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_API_KEY}&ipAddress=142.116.168.212`;

const getIpAddress = async () => {
  try {
    const res = await fetch(URL);
    if (!res.ok) throw new Error();

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log("ERROR", err)
  }
}

export const Header = () => {

  useEffect(() => {
    getIpAddress();
  }, [])

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
          <p className={styles.resultValue}>Result</p>
        </div>
        <div className={styles.result}>
          <h2 className={styles.resultTitle}>Location</h2>
          <p className={styles.resultValue}>Result</p>
        </div>
        <div className={styles.result}>
          <h2 className={styles.resultTitle}>Timezone</h2>
          <p className={styles.resultValue}>Result</p>
        </div>
        <div className={styles.result}>
          <h2 className={styles.resultTitle}>ISP</h2>
          <p className={styles.resultValue}>Result</p>
        </div>
      </div>
    </header>
  )
};