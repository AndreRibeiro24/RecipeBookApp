import {useParams, Link} from "react-router-dom";
import recipesData from "../data/recipes.json";

function RecipeDetailsPage(){
    const {recipeId} = useParams();
    const recipe = recipesData.recipes.find((recipe)=> recipe.id === Number(recipeId));

    if (!recipe) return <h2>Recipe Not Found</h2>
    return(
        <div className= "recipe-details">
           
            <img src={recipe.image} alt={recipe.title} className="recipe-details-img"/>

            <div className="recipe-details-body">
            <h1 className ="recipe-details-title">{recipe.title}</h1>
            <p className ='recipe-details-category'>Category:{recipe.category}</p>

            <div className="recipe-details-meta">
            <span>Difficulty:{recipe.difficulty}</span>
            <span>Prep Time:{recipe.prepTime}</span>
            <span>Cook Time:{recipe.cookTime}</span>
            <span>Servings:{recipe.servings}</span>
            
            </div>
            <div className="recipe-details-tags">
                {recipe.tags.map(tag=>(<span key={tag} className="tag">{tag}</span>

                ))}
            </div>
             <div className="recipe-details-section">
            <h2>Ingredients</h2>
            <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
            </ul>
            </div>
                  <div className="recipe-details-section">
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
            <Link to="/">
            <button>Back</button>
            </Link>
        </div>
        </div>
    );
}

export default RecipeDetailsPage;