import "../styles/App.scss";

import { useEffect, useState } from "react";

const App = () => {
  const [countryList, setCountryList] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryList(data);
      }, []);
  });

  const handleInputSearch = (ev) => {
    setSearchCountry(ev.target.value);
  }

  const renderCountry = () => {
    return countryList
      .filter((eachCountry) =>
        eachCountry.name.common
          .toLowerCase()
          .includes(searchCountry.toLowerCase())
      )
      .map((eachCountry, index) => {
        return (
          <li key={index} className="Country__item">
            <p className="country__flag">
              <img
                className="img_flag"
                src={eachCountry.flags.png}
                alt="flag"
              />
            </p>
            <h3 className="country__name">{eachCountry.name.common}</h3>
            <p className="country__cap">{eachCountry.capital}</p>
            <p className="country__cont">{eachCountry.continents}</p>
          </li>
        );
      });
  };

  return (
    <div>
      <header>
        <h1>Country Info App</h1>
        <input
          type="search"
          name="search"
          id=""
          value={searchCountry}
          placeholder="Filtrar países por nombre"
          onChange={handleInputSearch}
        />
        <select name="" id="">
          <option value="all">All</option>
          <option value="">Africa</option>
          <option value="">North America</option>
          <option value="">South America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>


      </header>
      <main>
        <ul className="list">{renderCountry()}</ul>
      </main>
    </div>
  );
};

export default App;
