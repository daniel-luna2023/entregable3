import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";

function App() {
  const [inputValue, setInputValue] = useState(getRandomNumber(126));

  const numberRandom = getRandomNumber(126);
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'undefined'}`;
  const [location, getLocation, hasError] = useFetch(url);

  useEffect(() => {
    getLocation();
  }, [inputValue]);

  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim());
  };

  return (
    <div className="form" >
      <header>
        <img src="/public/header.png" alt="" />
      </header>
      <div className="form_search">
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button className="form_search">Search</button>
      </form>
      </div>

      {
        hasError
          ? <h2 className="error">❌ Hey! you must provide an id from 1 to 126 😭</h2>
          :
        (<>
          <LocationInfo location={location} />
          <div className="residentt">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>)
      }
    </div>
  );
}

export default App;
