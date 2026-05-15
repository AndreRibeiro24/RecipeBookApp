import {useState} from 'react'

export default function AddRecipe({onAddRecipe}) {
    const [title,setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [image,setImage] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [servings, setServings] = useState(1);
    const [difficulty, setDifficulty] = useState("Easy");
    const [tags, setTags] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();{/*this prevents page from refreshing when form submits*/}
    const newRecipe = {
        id: Math.floor(Math.random()*10000000),
        title,
        category,
        image,
        prepTime,
        cookTime,
        servings,
        difficulty,
        tags: tags.split(",").map(tag => tag.trim()),
    };
    onAddRecipe(newRecipe);
    //thuis clears the form
        setTitle("");
        setCategory("");
        setImage("");
        setPrepTime("");
        setCookTime("");
        setServings(1)
        setDifficulty("Easy");
        setTags("");


    }
  return (
    <div className = "AddRecipeForm">
        {/*FORM Content*/}
        <form onSubmit={handleSubmit}> {/*this links the handleSubmit to the Form*/}
            <span>Add a Recipe</span>
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
            </div>
            <button type="submit" className="add-recipe-submit-btn">Add Recipe</button>
        </form>
    </div>
  )
}
