import React from 'react';
import styles from './Tag.module.css';
import { MenuItem } from '../../types/Data';
import Button from '../Button/Button';

interface TagProps {
  item: MenuItem;
  onClick: (e?: any) => void;
}

const Tag = (({ item, onClick }) => {
  return (
    <div className={styles.container}>
      <Button tag title={`${item.name}`} onClick={onClick} />
    </div>
  );
}) as React.FC<TagProps>;

export default Tag;
