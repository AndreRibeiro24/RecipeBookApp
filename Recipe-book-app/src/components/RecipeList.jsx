import { useState } from "react"
import RecipeCard from "./RecipeCard.jsx"

export default function RecipeList({recipes, onDelete}) {

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onDelete ={onDelete}
        />
      ))}
    </div>
  )
}
