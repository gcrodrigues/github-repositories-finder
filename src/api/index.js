import api from "./api";

export const fetchRepos = async (user) => {
  if (user === "") {
    return;
  }

  try {
    const { data } = await api.get(`/${user}/repos`);

    const response = data.map((data) => {
      const {
        name,
        description,
        html_url,
        stargazers_count,
        watchers_count,
        forks_count,
      } = data;

      const modifiedData = {
        name,
        description,
        url: html_url,
        star: stargazers_count,
        watch: watchers_count,
        forks: forks_count,
      };

      return modifiedData;
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserInfo = async (user) => {
  const { data } = await api.get(`/${user}`);

  const {
    avatar_url,
    login,
    html_url,
    name,
    bio,
    public_repos,
    followers,
    following,
  } = data;

  const response = {
    avatar: avatar_url,
    login,
    url: html_url,
    name,
    bio,
    repos: public_repos,
    followers,
    following,
  };
  return response;
};
