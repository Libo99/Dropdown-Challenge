import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  title?: string;
  onClick: (e?: any) => void;
  children?: React.ReactNode;
  menuButton?: boolean;
  value?: string;
  icon?: JSX.Element;
}

const Button = (({ title, onClick, children, menuButton, value }) => {
  return (
    <div>
      <button
        value={value}
        onClick={onClick}
        className={menuButton ? styles.menuButton : styles.button}
      >
        {title || children}
      </button>
    </div>
  );
}) as React.FC<ButtonProps>;

export default Button;
