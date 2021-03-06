import React from 'react';
import styles from './styles/displayPanel.module.css';
import { Payload } from '../../types';

interface Props {
  payload: Payload;
  error: string;
}

export const DisplayPanel = ({ payload, error }: Props) => {

  if (error) {
    return <p className={`${styles.results} ${styles.error}`}>
      Invalid IP address or domain detected. Please try again.
    </p>
  };

  if (payload.ip === '') {
    return <p className={styles.results}>Searching...</p>
  };

  const location = payload.location.postalCode === ''
    ? `${payload.location.city}, ${payload.location.region}`
    : `${payload.location.city}, ${payload.location.region}, ${payload.location.postalCode}`

  return (
    <div className={styles.results}>
      <div className={styles.result}>
        <h2 className={styles.resultTitle}>IP Address</h2>
        <p className={styles.resultValue}>{payload.ip}</p>
      </div>
      <div className={styles.result}>
        <h2 className={styles.resultTitle}>Location</h2>
        <p className={styles.resultValue}>{location}</p>
      </div>
      <div className={styles.result}>
        <h2 className={styles.resultTitle}>Timezone</h2>
        <p className={styles.resultValue}>UTC {payload.location.timezone}</p>
      </div>
      <div className={styles.result}>
        <h2 className={styles.resultTitle}>ISP</h2>
        <p className={styles.resultValue}>{payload.isp}</p>
      </div>
    </div>
  )
};