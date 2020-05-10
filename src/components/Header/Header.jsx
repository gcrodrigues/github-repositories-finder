import React from 'react';
import { FaGithub, FaSearch } from 'react-icons/fa'
import styles from './Header.module.css';



const Header = () => {
  return(
    <div className={styles.container}>
      <h1 className={styles.title}><FaGithub /> Repositories</h1>
      
      <form className={styles.searchForm}>
        <input type="text"/>
        <button><FaSearch /></button>
      </form>

      
    </div>
  );
}

export default Header;