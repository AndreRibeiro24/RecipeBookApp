import AddRecipe from "../components/AddRecipe.jsx"
import { useNavigate } from "react-router-dom"

export default function AddRecipePage({ onAddRecipe }) {
  const navigate = useNavigate()

  const handleAdd = (newRecipe) => {
    onAddRecipe(newRecipe)
    navigate("/") 
  }

  return (
    <div>
      <h1 style={{padding: "1.5rem 2.5rem 0"}}>Add a New Recipe</h1>
      <AddRecipe onAddRecipe={handleAdd}/>
    </div>
  )
}