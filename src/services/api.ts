import parseLink from "parse-link-header";

export interface IUser {
  avatar_url: string;
  login: string;
}

export interface IRepo {
  owner: { avatar_url: string };
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
}

export async function getUsers(username: string, perPage = 5) {
  const url = `https://api.github.com/search/users?q=${username}&per_page=${perPage}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const users = await response.json();
  return users;
}

export async function getRepos(username: string, page = 1, perPage = 10) {
  const url = `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`;

  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  let lastPage = 0;
  let nextPage = 0;

  const pageLinks = parseLink(response.headers.get("link"));
  if (pageLinks !== null) {
    const lastP = (pageLinks.last && pageLinks.last.page) || "";
    const nextP = (pageLinks.next && pageLinks.next.page) || "";
    lastPage = parseInt(lastP, 10);
    nextPage = parseInt(nextP, 10);
  }

  const items = await response.json();

  return {
    lastPage,
    nextPage,
    items,
  };
}
