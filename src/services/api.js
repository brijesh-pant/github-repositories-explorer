import parseLink from "parse-link-header";

export async function getUsers(username, perPage = 5) {
  const url = `https://api.github.com/search/users?q=${username}&per_page=${perPage}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const users = await response.json();
  return users;
}

export async function getRepos(username, page = 1, perPage = 10) {
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
    lastPage = parseInt(pageLinks.last.page, 10);
    nextPage = parseInt(pageLinks.next.page, 10);
  }

  const items = await response.json();

  return {
    lastPage,
    nextPage,
    items,
  };
}
