import React from 'react';
import { MenuItem as Item } from '../../types/Data';
import styles from './Card.module.css';

interface CardProps {
  item: Item;
  onClick?: (e?: any) => void;
  selected?: boolean;
}

const Card = (({ onClick, item, selected }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={selected ? styles.selectedCard : styles.card}>
        <img src={item.image} alt="Avatar" height={30} width={30} />
        <p className={styles.itemName}>{item.name}</p>
      </div>
    </div>
  );
}) as React.FC<CardProps>;

export default Card;
