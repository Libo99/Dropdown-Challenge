import React from 'react';
import styles from './Dropdown.module.css';
import { Data } from '../../types/Data';

interface DropDownProps {
  data: Data[];
  visible: boolean;
}

const Dropdown = (({ data, visible }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div>
          <h1>{item.category}</h1>
        </div>
      ))}
    </div>
  );
}) as React.FC<DropDownProps>;

export default Dropdown;
