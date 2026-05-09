import {Link} from "react-router-dom";

function Sidebar(){
    return(
        <>
        <div className ="sidebar">
            <Link to="/"><p className ="homePage">Home page</p></Link>
            <Link to="/about"><p className ="aboutPage">About page</p></Link>
        </div>
        </>
    );
}
export default Sidebar;