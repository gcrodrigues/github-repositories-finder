import axios from 'axios';

const url = 'https://api.github.com/users';

export const fetchRepos = async (user) => {
  const { data } = await axios.get(`${url}/${user}/repos`);

  return data.map(data => {
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
}