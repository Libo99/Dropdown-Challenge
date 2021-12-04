import React from 'react';
import styles from './Dropdown.module.css';
import { Data } from '../../types/Data';
import Button from '../Button/Button';

interface DropDownProps {
  data?: Data[];
  children?: React.ReactNode;
  onClick: (e: any) => void;
}

const Dropdown = (({ data, children, onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.droptop}>
        {data?.map((item) => (
          <Button
            value={item.category}
            onClick={onClick}
            title={item.category}
            menuButton
          />
        ))}
      </div>
      <div className={styles.itemsContainer}>{children}</div>
    </div>
  );
}) as React.FC<DropDownProps>;

export default Dropdown;
