const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character").then((response) =>
    response.json().then((data) => {
      return data.results.map((user) => {
        return {
          id: user.id,
          name: user.name,
          species: user.species,
          status: user.status,
          episode: user.episode,
          image: user.image,
        };
      });
    })
  );
};
export default getDataFromApi;
