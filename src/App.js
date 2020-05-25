import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import Recipe from "./components/recipe/Recipe";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "25ce8a7b";
  const APP_KEY = "5e55c33b68f7cfa9d3502e8b1e854939";
  const api_url = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const searchSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const getData = async () => {
    const result = await Axios.get(api_url);
    console.log(result);
    setRecipes(result.data.hits);
    setQuery("");
  };
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="App">
      <h1 onClick={getData}>FOOD SEARCH</h1>
      <form className="search-form" onSubmit={searchSubmit}>
        <input
          type="text"
          name="search"
          onChange={changeHandler}
          placeholder="Enter food name pizza, chicken...."
          value={query}
        />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <Recipe key={uuidv4()} recipe={recipe} />;
          })}
      </div>
    </div>
  );
};

export default App;
