import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Dropdown from './components/Dropdown/Dropdown';
import { data } from './Data/data';

const App = (() => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.container}>
      <Button title="+ Add filter" onClick={() => setShowMenu(!showMenu)} />
      {showMenu && <Dropdown data={data} visible={showMenu} />}
    </div>
  );
}) as React.FC;

export default App;
