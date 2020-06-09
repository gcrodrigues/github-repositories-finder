import React, { useContext } from "react";
import { Context } from "../../hooks/UserInfosContext";

import styles from "./User.module.css";

const User = () => {
  const { userInfoValue, loadingValue } = useContext(Context);
  const [userInfo, setUserInfo] = userInfoValue;
  const [loading, setLoading] = loadingValue;

  return (
    <>
      {loading ? (
        ""
      ) : (
        <div className={styles.container}>
          <img
            className={styles.image}
            src={userInfo.avatar}
            alt={`Foto de perfil de ${userInfo.name}`}
          />
          <h2 className={styles.user__name}>{userInfo.name}</h2>
          <a className={styles.user__login} href={userInfo.url}>
            <p>@{userInfo.login}</p>
          </a>
          <p className={styles.user__bio}>{userInfo.bio}</p>
          <div className={styles.info}>
            <p className={styles.info__repo}>{userInfo.repos} Repositories</p>
            <p className={styles.info__follow}>
              {userInfo.followers} Followers
            </p>
            <p className={styles.info__following}>
              {userInfo.following} Following
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
