import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Homepage from "./pages/Homepage.jsx";
import RecipesDetailsPage from "./pages/RecipesDetailsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="layout">
        <Sidebar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/recipes/:recipeId" element={<RecipesDetailsPage/>}/>
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
