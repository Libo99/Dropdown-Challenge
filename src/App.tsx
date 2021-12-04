import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Dropdown from './components/Dropdown/Dropdown';
import MenuItem from './components/MenuItem/MenuItem';
import { data } from './Data/data';

const App = (() => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Button title="+ Add filter" onClick={() => setShowMenu(!showMenu)} />
      </div>
      <div className={styles.dropdownContainer}>
        {showMenu && (
          <Dropdown visible={showMenu}>
            {data.map((menuItem) => (
              <div className={styles.dropdown}>
                <div className={styles.droptop}>
                  <p>{menuItem.category}</p>
                </div>
                <div>
                  {menuItem.item.map((item) => (
                    <MenuItem menuItem={item} />
                  ))}
                </div>
              </div>
            ))}
          </Dropdown>
        )}
      </div>
    </div>
  );
}) as React.FC;

export default App;
