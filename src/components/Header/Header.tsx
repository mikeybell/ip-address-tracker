import React from 'react';
import { Payload } from '../../types';
import { DisplayPanel } from './DisplayPanel';
import { SearchBar } from './SearchBar';
import styles from './styles/header.module.css';

interface Props {
  payload: Payload;
  error: string;
  handleSearch: (searchValue: string) => Promise<void>;
}

export const Header = ({ payload, error, handleSearch }: Props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>IP Address Tracker</h1>
      <SearchBar handleSearch={handleSearch} />
      <DisplayPanel payload={payload} error={error} />
    </header>
  )
};