import { useState } from "react"
import recipesData from "../data/recipes.json"
import RecipeCard from "./RecipeCard.jsx"

export default function RecipeList() {
  const [recipes, setRecipes] = useState(recipesData.recipes)

  const handleDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  )
}
