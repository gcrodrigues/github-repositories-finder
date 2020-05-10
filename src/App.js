import React from 'react';

import { Header, Repository } from './components';
import styles from './App.module.css';

const App = () => {
  return(
    <div className={styles.container}>
      <Header />
      <Repository />
    </div>
  )
}

export default App;