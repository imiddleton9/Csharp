import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../apollo/queries';
import './App.css'

function App() {
  const [recipeList, setRecipesList] = useState([]);

  const { loading, error, data } = useQuery(QUERY_RECIPES);

  useEffect(() =>{
    if (data) {
      setRecipesList(data.getRecipes)
    }
  }, [data])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return ( 
    <div>
      {recipeList.map((recipe, index) => {
        return <div key={index}>{recipe.id}</div>;
      })}
    </div>
  );
}
export default App;
