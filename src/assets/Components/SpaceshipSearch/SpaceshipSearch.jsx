import { useState } from 'react';

const SpaceshipSearch = (props) => {

  const [query, setQuery] = useState('');''

  const handleSubmit = (event) => {
    event.preventDefault();
    const SEARCH_URL = "https://swapi.dev/api/starships/?search="
    const searchQuery = SEARCH_URL + query
    console.log(searchQuery);
    props.fetchData(searchQuery);
  }; 

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="query"></label>
        <input
          id="query"
          type="text"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
        <h3>Displaying {props.results} results</h3>
      </form>
    </section>
  );
};

export default SpaceshipSearch;
