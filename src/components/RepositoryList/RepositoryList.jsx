import React, { useContext } from "react";
import { Context } from "../../hooks/UserInfosContext";
import styles from "./RepositoryList.module.css";
import { Repository } from "../";

const RepositoryList = () => {
  const { reposValue, loadingValue } = useContext(Context);
  const [repos, setRepos] = reposValue;
  const [loading, setLoading] = loadingValue;

  return (
    <div className={styles.repositories}>
      {loading ? (
        <div className={styles.loadingContainer}>
          <h2 className={styles.loading}>Loading...</h2>
        </div>
      ) : (
        <>
          {repos.map((repo, index) => (
            <Repository
              key={index}
              name={repo.name}
              description={repo.description}
              url={repo.url}
              watch={repo.watch}
              star={repo.star}
              forks={repo.forks}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default RepositoryList;
