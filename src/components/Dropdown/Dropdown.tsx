import React from 'react';
import styles from './Dropdown.module.css';
import { Data } from '../../types/Data';
import Button from '../Button/Button';

interface DropDownProps {
  data?: Data[];
  visible?: boolean;
  children?: React.ReactNode;
  onClick: (e: any) => void;
}

const Dropdown = (({ children, onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.droptop}>
        <Button value="users" onClick={onClick} title="Users" menuButton />
        <Button
          menuButton
          value="integrations"
          onClick={onClick}
          title="Integrations"
        />
      </div>
      <div className={styles.itemsContainer}>{children}</div>
    </div>
  );
}) as React.FC<DropDownProps>;

export default Dropdown;
