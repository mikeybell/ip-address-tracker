import React, { useState, MouseEvent, ChangeEvent } from 'react';
import { useIpInfo } from './hooks/useIpInfo';
import { DisplayPanel } from '../DisplayPanel';
import { Map } from '../Map';
import { ReactComponent as Arrow } from '../../assets/icon-arrow.svg';
import styles from './header.module.css';

export const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const { error, payload, handleSearch } = useIpInfo();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  };

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    handleSearch(searchValue);
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>IP Address Tracker</h1>
        <form className={styles.form}>
          <input
            className={styles.input}
            onChange={onChange}
            placeholder="Search for any IP address or domain"
            type="text"
            value={searchValue}
          />
          <button
            className={styles.submit}
            type="submit"
            onClick={onSubmit}
          >
            <Arrow/>
          </button>
        </form>
        <DisplayPanel payload={payload} error={error} />
      </header>
      <main>
        <Map payload={payload} />
      </main>
    </>
  )
};