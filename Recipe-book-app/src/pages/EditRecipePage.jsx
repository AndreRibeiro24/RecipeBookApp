import React from 'react'
import {useState} from 'react'
import {useParams, useNavigate} from "react-router-dom";

export default function EditRecipePage({recipes, onUpdateRecipe}) {
const {recipeId} = useParams();
const navigate = useNavigate();
const recipe = recipes.find((r) => r.id === Number (recipeId));

const [title, setTitle] = useState (recipe?.title || "");
const [category, setCategory]= useState (recipe?.category || ""); 
const [image, setImage] = useState(recipe?.image || "");
const [prepTime, setPrepTime] = useState(recipe?.prepTime || "");
const [cookTime, setCookTime] = useState(recipe?.cookTime || "");
const [servings, setServings] = useState(recipe?.servings || 1);
const [difficulty, setDifficulty] = useState(recipe?.difficulty || "Easy");
const [tags, setTags] = useState(recipe?.tags?.join(", ")|| ""); 
const [ingredients , setIngredients] = useState (recipe?.ingredients?.join("\n")|| "")
const [instructions , setInstructions] = useState (recipe?.instructions?.join("\n")|| "")

if(!recipe) return <h2>Recipe Not Found!</h2>


        const handleSubmit = (e) =>{
            e.preventDefault();{/*this prevents page from refreshing when form submits*/}
        const updatedRecipe = {
            ...recipe,
            title,
            category,
            image,
            prepTime,
            cookTime,
            servings,
            difficulty,
            tags: tags.split(",").map(tag => tag.trim()),
            ingredients: ingredients.split("\n").map(item => item.trim()).filter(item => item !== ""),
            instructions: instructions.split("\n").map(step => step.trim()).filter(step => step !== ""),
        };
        onUpdateRecipe(updatedRecipe);
        navigate(`/recipes/${recipe.id}`);
    }
  return (
     <div className = "AddRecipeForm">
        {/*FORM Content*/}
        <form onSubmit={handleSubmit}> {/*this links the handleSubmit to the Form*/}
            <span>Edit Recipe</span>
            <div>
                <label>
                    Recipe Title
                    <input name="recipeTitle" type="text" placeholder="Recipe Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </label>

                <label>
                    Recipe Category
                    <input name="recipeCategory" type="text" placeholder="Recipe Category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                </label>
                <label>
                    Recipe Image
                    <input name="recipeImage" type="url" placeholder="Place Image Url" value={image} onChange={(e)=>setImage(e.target.value)}/>
                </label>
                <label>
                    Preperation Time
                    <input name="prepTime" type="text" placeholder="Preparation Time" value={prepTime} onChange={(e)=>setPrepTime(e.target.value)}/>
                </label>
                <label>
                    Cooking Time
                    <input name="cookTime" type="text" placeholder="Cooking Time" value={cookTime} onChange={(e)=> setCookTime(e.target.value)}/>
                </label>
                <label>
                    Servings
                    <input name="servings" type="text" placeholder="Servings" value={servings} onChange={(e)=> setServings(e.target.value)}/>
                </label>
                <label>
                    Difficulty Level
                    <select name="Dificulty" value={difficulty} onChange={(e)=> setDifficulty(e.target.value)}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </label>
                <label>
                    Include Tags
                    <input name="tags" type="text" placeholder="Type Your Tags ex:(low cal, fit, tasty, new, trending)" value = {tags} onChange={(e)=> setTags(e.target.value)}/>
                </label>
                 <label>
                        Ingredients (one per line)
                        <textarea
                            name="ingredients"
                            placeholder={"1 cup flour\n2 eggs\n1/2 cup milk"}
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            style={{ resize: "vertical", minHeight: "120px" }}
                        />
                    </label>
                    <label>
                        Instructions (one step per line)
                        <textarea
                            name="instructions"
                            placeholder={"Mix dry ingredients\nAdd eggs and milk\nBake at 180°C for 30 mins"}
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                             style={{ resize: "vertical", minHeight: "120px" }}
                        />
                    </label>
            </div>
            <button type="submit" className="add-recipe-submit-btn">Add Recipe</button>
        </form>
    </div>
  )
}
