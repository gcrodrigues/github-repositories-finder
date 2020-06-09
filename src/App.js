import React, { useContext } from "react";
import { Context } from "./hooks/UserInfosContext";
import { Header, User, RepositoryList, Form } from "./components";

import styles from "./App.module.css";

const App = () => {
  const { sizeValue } = useContext(Context);
  const [size, setSize] = sizeValue;

  return (
    <div className={styles.container}>
      <Header />
      {size < 770 && (
        <Form
          text={"Busque por respositórios aqui."}
          style={styles.searchForm}
        />
      )}
      <User />
      <RepositoryList />
    </div>
  );
};

export default App;
