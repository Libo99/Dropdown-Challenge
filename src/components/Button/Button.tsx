import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  title?: string;
  onClick: (e?: any) => void;
  children?: React.ReactNode;
  menuButton?: boolean;
  value?: string;
  icon?: JSX.Element;
  tag?: boolean;
  selected?: boolean;
}

const Button = (({ title, onClick, children, menuButton, value, tag, selected }) => {
  return (
    <div>
      <button
        value={value}
        onClick={onClick}
        className={
          selected ? styles.selected :
          menuButton
            ? styles.menuButton
            : tag
            ? styles.tagButton
            : styles.button
        }
      >
        {title || children}
      </button>
    </div>
  );
}) as React.FC<ButtonProps>;

export default Button;
