// import '../App.css'
// import RecipeList from "../components/RecipeList.jsx"
// function Homepage() {
//   return (
//     <>
    
//       <div className = "container">{/*main page content + side bar*/}
//       <h1>Recipes</h1>
//       <RecipeList/>
//       </div>
      
//     </>
//   );
// }
// export default Homepage;


import RecipeList from '../components/RecipeList.jsx'

function Homepage() {
  return (
    <div>
      <h1 style={{padding: "1.5rem 2.5rem 0"}}>Recipes</h1>
      <RecipeList />
    </div>
  )
}

export default Homepage;
