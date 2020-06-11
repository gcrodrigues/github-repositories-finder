import React, { useEffect, useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { Context } from "../../hooks/UserInfosContext";
import { Form } from "../";

import styles from "./Header.module.css";

const Header = () => {
  const { sizeValue } = useContext(Context);
  const [size, setSize] = sizeValue;

  useEffect(() => {
    function windowResize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", windowResize);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <FaGithub style={{ marginRight: 10 }} /> Repositories
      </h1>

      {size > 770 && <Form />}
    </div>
  );
};

export default Header;
