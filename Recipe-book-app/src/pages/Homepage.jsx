import RecipeList from '../components/RecipeList.jsx'
import recipesData from "../data/recipes.json"
import {useNavigate} from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import {useState} from 'react'
function Homepage({recipes, onDelete}) {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("");
  const filteredRecipes = recipes.filter((recipe)=>{
    const queryVal = searchQuery.toLowerCase();
    if (!queryVal) return true;
    return(
    recipe.title.toLowerCase().includes(queryVal) ||
    recipe.difficulty?.toLowerCase().includes(queryVal) ||
    recipe.tags?.some((tag)=> tag.toLowerCase().includes(queryVal)) ||
    recipe.ingredients?.some((ing)=>ing.toLowerCase().includes(queryVal))
  )});

  return (
    <div>
       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 2.5rem 0" }}>
        <h1>Your Recipes</h1>
        <button className='add-recipe-btn' onClick={() => navigate("/add-recipe")}>+ Add Recipe</button>
      </div>
      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery}/>
      <RecipeList recipes={filteredRecipes} onDelete={onDelete}/>
    </div>
  )
}
export default Homepage;
