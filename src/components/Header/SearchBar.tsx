import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { ReactComponent as Arrow } from '../../assets/icon-arrow.svg';
import styles from './styles/searchBar.module.css';

interface Props {
  handleSearch: (searchValue: string) => Promise<void>;
}

export const SearchBar = ({ handleSearch }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  };

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSearch(searchValue);
  };

  return (
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
  );
}