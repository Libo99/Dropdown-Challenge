import React from 'react';
import styles from './Dropdown.module.css';
import { Data } from '../../types/Data';

interface DropDownProps {
  data?: Data[];
  visible?: boolean;
  children: React.ReactNode;
}

const Dropdown = (({  children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}) as React.FC<DropDownProps>;

export default Dropdown;
