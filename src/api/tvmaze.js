const BASE_URL = "https://api.tvmaze.com";

const getApi = async (queryString) => {
    const body = await fetch(`${BASE_URL}${queryString}`);
    return await body.json();
};

export const searchForShows = (searchString) => getApi(`/search/shows?q=${searchString}`);

export const searchForActors = (searchString) => getApi(`/search/people?q=${searchString}`);

export const getShowById = (id) => getApi(`/shows/${id}`);