import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Homepage from "./pages/Homepage.jsx";
import RecipesDetailsPage from "./pages/RecipesDetailsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AddRecipePage from './pages/AddRecipePage.jsx';
import {useState} from 'react'
import recipesData from './data/recipes.json'

function App() {
   const [recipes, setRecipes] = useState(recipesData.recipes);
   const handleAddRecipes = (newRecipe) =>{
      setRecipes([...recipes,newRecipe])
    }
   const handleDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="layout">
        <Sidebar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage recipes={recipes} onDelete={handleDelete}/>} />
            <Route path="/add-recipe" element={<AddRecipePage onAddRecipe={handleAddRecipes}/>}/>
            <Route path="/recipes/:recipeId" element={<RecipesDetailsPage recipes={recipes}/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
