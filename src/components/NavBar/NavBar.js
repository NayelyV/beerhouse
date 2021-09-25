import logo from '../../img/logo.jpg'
import './NavBar.css'

//Component
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logo">
                <img src={logo} alt="beerhouse logo"/>
            </div>
            <div className="menu">
                <ul className="menu-list">
                    <li><a className='menu-link'>Cervezas</a></li>
                    <li><a className='menu-link'>Top Sellers</a></li>
                    <li><a className='menu-link'>Beerpacks</a></li>
                    <li><a className='menu-link'>Accesorios</a></li>
                </ul>
            </div>
            <CartWidget />
            
        </nav>
    );
};

export default NavBar;