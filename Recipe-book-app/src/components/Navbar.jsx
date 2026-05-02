import logoImg from '../assets/logoImg.jpg'
function Navbar(){
    return(
        <>
        <div className="navbar">
            <h3 className="title">Recipe WebApp</h3>
            <img src={logoImg} alt='logo' className='logo'/>
            
        </div>
        </>    
);
}
export default Navbar;