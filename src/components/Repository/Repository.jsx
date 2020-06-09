import React, { useContext, useEffect } from "react";
import cx from "classnames";
import { Context } from "../../hooks/UserInfosContext";
import { FaEye, FaStar, FaCodeBranch } from "react-icons/fa";

import styles from "./Repository.module.css";

const Repository = ({ name, description, url, watch, star, forks }) => {
  const { sizeValue } = useContext(Context);
  const [size, setSize] = sizeValue;
  const windowSize = window.innerWidth;
  useEffect(() => {
    setSize(windowSize);
  }, [windowSize]);

  return (
    <div className={styles.repo}>
      <div>
        <h2 className={styles.repo__name}>{name}</h2>
        <p className={styles.repo__description}>{description}</p>
        <a
          className={
            size > 480
              ? styles.repo__link
              : cx(styles.repo__link, styles.repo__link_right)
          }
          href={url}
        >
          Visit page
        </a>
      </div>
      <ul className={styles.list}>
        <li className={cx(styles.list__item, styles.list__item__watch)}>
          <FaEye size="18" /> {watch}
        </li>
        <li className={cx(styles.list__item, styles.list__item__star)}>
          <FaStar size="18" /> {star}
        </li>
        <li className={cx(styles.list__item, styles.list__item__forks)}>
          <FaCodeBranch size="18" /> {forks}
        </li>
      </ul>
    </div>
  );
};

export default Repository;
