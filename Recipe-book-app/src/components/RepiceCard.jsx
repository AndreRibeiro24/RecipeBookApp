
export default function RecipeCard({recipe, onDelete}) {
  return (
    <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title}/>
        <p>Tags: {recipe.tags.join(", ")}</p>
        <p>Category: {recipe.category}</p>
        <p>Prep Time: {recipe.prepTime} | Cook Time: {recipe.cookTime}</p>
        <p>Servings: {recipe.servings}</p>

        <p>
            {recipe.difficulty === "Easy" ? "Starter-Level" : recipe.difficulty === "Medium" ? "Mid-Level" : "Advanced-Level"}
        </p>

        <button onClick={()=> onDelete(recipe.id)}>Delete</button>
    </div>
  )
}
