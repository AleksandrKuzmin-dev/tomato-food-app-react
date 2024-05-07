import { useState } from 'react';
import { assets } from '../../assets/assets';
import './navbar.css';

const Navbar = () => {

  const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <img src={assets.logo} alt="" className="logo" />
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : "null"}>home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : "null"}>menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : "null"}>mobile-app</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : "null"}>contact us</li>
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
    );

};

export default Navbar;