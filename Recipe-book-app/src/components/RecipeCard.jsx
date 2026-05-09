import { Link } from "react-router-dom"

export default function RecipeCard({ recipe, onDelete }) {
  return (
    <div className="recipe-card">
      <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.title} className="recipe-card-img" />
        <div className="recipe-card-body">
          <h2 className="recipe-card-title">{recipe.title}</h2>
          <p className="recipe-card-category">{recipe.category}</p>
          <div className="recipe-card-meta">
            <span>⏱ {recipe.prepTime}</span>
            <span>🍳 {recipe.cookTime}</span>
            <span>👤 {recipe.servings} servings</span>
          </div>
          <p className="recipe-card-difficulty">
            {recipe.difficulty === "Easy" ? "Starter-Level" : recipe.difficulty === "Medium" ? "Mid-Level" : "Advanced-Level"}
          </p>
          <div className="recipe-card-tags">
            {recipe.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
      <button className="recipe-card-delete" onClick={() => onDelete(recipe.id)}>Delete</button>
    </div>
  )
}
