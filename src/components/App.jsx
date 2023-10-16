import '../styles/App.scss';
// Fichero src/components/App.jsx
import { useEffect, useState } from 'react';
import callToApi from '../services/api'; // Importamos el servicio que acabamos de crear

const App = () => {
  // Estados

  const [showsData, setshowsData] = useState([]);
  const [searchShow, setsearchShow] = useState('');

  // Llamar a la api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi(searchShow).then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setshowsData(response);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, [searchShow]);
  const handleSearchName = (ev) => {
    setsearchShow(ev.target.value);
  };
  const renderShows = () => {
    return showsData.map((show, index) => {
      return <li key={index}>Serie: {show.name}</li>;
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Busca tu serie favorita</label>
        <input
          type="text"
          value={searchShow}
          name="name"
          id="name"
          onChange={handleSearchName}
        />
      </form>
      <h2>Series con el nombre: {searchShow}</h2>
      <ul>{renderShows()}</ul>
    </div>
  );
};

export default App;
