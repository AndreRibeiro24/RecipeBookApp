import RecipeList from '../components/RecipeList.jsx'
import recipesData from "../data/recipes.json"
import {useNavigate} from 'react-router-dom'

import {useState} from 'react'
function Homepage({recipes, onDelete}) {
  const navigate = useNavigate()
  return (
    <div>
      <h1 style={{padding: "1.5rem 2.5rem 0"}}>Recipes</h1>
      <button className='add-recipe-btn' onClick={()=> navigate("/add-recipe")}>+Add Recipe</button>
      <RecipeList recipes={recipes} onDelete={onDelete}/>
    </div>
  )
}
export default Homepage;
