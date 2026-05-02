import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import '../App.css'
// import logoImg from '../assets/logoImg.jpg'
function Homepage() {
  return (
    <>
    <Navbar/> {/*holds logo + app name*/}
      <div className = "container">{/*main page content + side bar*/}
        <Sidebar/> {/*Holds sidebar content wrappend inside the container*/}
        <main>
            <p>This is the website</p>
        </main>
      </div>
      <Footer/>
    </>
  );
}
export default Homepage;
