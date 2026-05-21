import {Link} from "react-router-dom";

function Sidebar(){
    return(
        <>
        <div className ="sidebar">
            <Link to="/"><p className ="homePage">Home Page</p></Link>
            <Link to="/about"><p className ="aboutPage">About Page</p></Link>
        </div>
        </>
    );
}
export default Sidebar;