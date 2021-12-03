import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button = (({ title, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={styles.button}>
        {title}
      </button>
    </div>
  );
}) as React.FC<ButtonProps>;

export default Button;
