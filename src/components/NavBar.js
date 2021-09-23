import logo from '../img/logo.jpg'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logo">
                <img src={logo} alt="beerhouse logo"/>
            </div>
            <div className="menu">
                <ul className="menu-list">
                    <li><a>Cervezas</a></li>
                    <li><a>Top Sellers</a></li>
                    <li><a>Beerpacks</a></li>
                    <li><a>Accesorios</a></li>
                </ul>
            </div>
            
        </nav>
    );
};

export default NavBar;