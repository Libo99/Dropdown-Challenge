import React from 'react';
import styles from './Tag.module.css';
import { MenuItem } from '../../types/Data';
import Button from '../Button/Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface TagProps {
  item: MenuItem;
  onClick: (e?: any) => void;
}

const Tag = (({ item, onClick }) => {
  return (
    <div className={styles.container}>
      <Button tag onClick={onClick}>
        {item.type}: {item.name}
        <AiOutlineCloseCircle
          style={{
            height: 15,
            width: 15,
            color: ' #9FB4B4',
            paddingTop: '2px',
          }}
        />
      </Button>
    </div>
  );
}) as React.FC<TagProps>;

export default Tag;
