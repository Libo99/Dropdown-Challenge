import React from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  value: string;
  onChange: (e?: any) => void;
  type: string;
  name: string;
  placeHolder?: string;
  children?: React.ReactNode;
  icon: JSX.Element;
}

const SearchBar = (({ value, onChange, name, type, placeHolder, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <input
        className={styles.input}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  );
}) as React.FC<SearchBarProps>;

export default SearchBar;
