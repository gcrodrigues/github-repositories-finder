import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../hooks/UserInfosContext";
import { fetchRepos, fetchUserInfo } from "../../api";
import { FaSearch } from "react-icons/fa";

import styles from "./Form.module.css";

const Form = ({ style, text }) => {
  const { reposValue, userInfoValue, loadingValue, sizeValue } = useContext(
    Context
  );

  const [repos, setRepos] = reposValue;
  const [userInfo, setUserInfo] = userInfoValue;
  const [loading, setLoading] = loadingValue;
  const [size, setSize] = sizeValue;
  const [inputSearch, setInputSearch] = useState("");
  const [query, setQuery] = useState("gcrodrigues");

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const fetchedRepos = await fetchRepos(query);
      const fetchedUserInfo = await fetchUserInfo(query);
      setRepos(fetchedRepos);
      setUserInfo(fetchedUserInfo);
      setLoading(false);
    };

    fetchApi();

    //eslint-disable-next-line
  }, [query]);

  const queryRepo = (e) => {
    e.preventDefault();
    setQuery(inputSearch);
    setInputSearch("");
  };

  return (
    <form
      onSubmit={queryRepo}
      className={size < 770 ? style : styles.searchForm}
    >
      {text && <h3>{text}</h3>}
      <div className={styles.inputSearch}>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Enter a username"
        />
        <button>
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default Form;
