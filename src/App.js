import React, { useState, useEffect } from 'react';
import { Header, Repository } from './components';
import { fetchRepos } from './api';

import styles from './App.module.css';

const App = () => {
  const[repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchApi = async () =>{
      setRepos(await fetchRepos('gcrodrigues'));
    }

    fetchApi()
  }, []);

  return(
    <div className={styles.container}>
      <Header />
      <Repository />
    </div>
  )
}

export default App;