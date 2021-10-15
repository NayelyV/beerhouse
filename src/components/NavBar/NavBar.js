import logo from '../../img/logo.jpg'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

//Styles
import './NavBar.css'

//Component
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios('https://6158ba3f5167ba00174bbbc9.mockapi.io/api/v1/categories').then((res) => 
        setCategories(res.data)
        )
    }, [])

    return (
        <nav className="navBar">
            <div className="logo">
                <Link to={`/`}>
                    <img className="logo-img" src={logo} alt="beerhouse logo"/>
                </Link>
            </div>
            <div className="menu">
                <ul className="menu-list">
                {categories.map((category) => {
                    return ( 
                        <li key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></li>
                        );
                    })}
                </ul>
            </div>
            <CartWidget />
            
        </nav>
    );
};

export default NavBar;