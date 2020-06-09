import React, { useState, createContext } from "react";

export const Context = createContext();

export const UserInfoProvider = (props) => {
  const [repos, setRepos] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  return (
    <Context.Provider
      value={{
        reposValue: [repos, setRepos],
        userInfoValue: [userInfo, setUserInfo],
        loadingValue: [loading, setLoading],
        sizeValue: [size, setSize],
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
