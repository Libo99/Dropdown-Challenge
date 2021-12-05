import React from 'react';
import styles from './App.module.css'
import Home from './pages/Home/Home';

const App = (() => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}) as React.FC;

export default App;
