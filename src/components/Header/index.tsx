import React from 'react';
import { useInitialIpAddress } from './hooks/useInitialIpAddress';
import { InfoDisplay } from '../InfoDisplay';
import styles from './header.module.css';

export const Header = () => {
  const { error, payload } = useInitialIpAddress();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>IP Address Tracker</h1>
      <input
        className={styles.input}
        placeholder="Search for any IP address or domain"
        type="text"
      />
      <InfoDisplay payload={payload} error={error} />
    </header>
  )
};