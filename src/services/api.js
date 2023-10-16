const callToApi = () => {
    // Llamamos a la API
    return fetch("https://restcountries.com/v3.1/all?fields=name,capital,flag,continents") 
      .then((response) => response.json())
      .then((response) => {
        // Cuando responde la API podemos limpiar los datos aquí
        const result = response.map((country) => {
          return {
            name: country.name.common,
            capital: country.capital,
            flag: country.flag,
            cont: country.continents
          };
        });
        return result;
        
      });
  };

  export default callToApi();