import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "900da95e";
  const APP_KEY="40698503668e0bb3897581f4766d77f9";

   const[recipes,setRecipes]=useState([]);
   const [search,setSearch] = useState("");
   const [query, setQuery] = useState('poha');
 

  useEffect(() => {
    getRecipies();
    
  },[query]);

  const getRecipies = async() =>{
    const response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}`)
    const data = await response.json();
    setRecipes(data.hits); 
    console.log(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        protien={recipe.recipe.totalNutrients.PROCNT.quantity}
        carbo={recipe.recipe.totalNutrients.CHOCDF.quantity}
        fat={recipe.recipe.totalNutrients.FAT.quantity}
       
      />
      ) )}
      </div>
      
        </div>
  );
};
export default App;
