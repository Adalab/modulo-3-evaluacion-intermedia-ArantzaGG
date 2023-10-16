const callToApi = (searchShow) => {
  // Llamamos a la API
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchShow}`) //
    .then((response) => response.json())
    .then((response) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const result = response.map((showItem) => {
        return {
          name: showItem.show.name,
        };
      });
      return result;
    });
};

export default callToApi;
