import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './navbar.css';

const Navbar = () => {

  const [menu, setMenu] = useState("home");

    return (
        <div className="navbar-wrapper">
            <div className="app-wrapper">
                <div className="navbar">
                    <img src={assets.logo} alt="" className="logo" />
                    <ul className="navbar-menu">
                        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : "null"}>home</Link>
                        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : "null"}>menu</a>
                        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : "null"}>mobile-app</a>
                        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : "null"}>contact us</a>
                    </ul>
                    <div className="navbar-right">
                        <img src={assets.search_icon} />
                        <div className="navbar-bag-icon">
                            <img src={assets.basket_icon} alt="" />
                            <div className="dot"></div>
                        </div>
                        <button>sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Navbar;
