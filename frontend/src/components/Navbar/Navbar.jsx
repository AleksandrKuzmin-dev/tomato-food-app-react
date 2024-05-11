import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { assets } from '../../assets/assets';
import { selectHomeNavActive } from '../../store/slices/homeNavActive.slice';
import { selectTotalAmount } from '../../store/slices/cartItems.slice';

import './navbar.css';

const Navbar = ({ setShowLogin }) => {
    const [hasShadow, setHasShadow] = useState(window.scrollY > 100);
    const location = useLocation();
    const { hash } = location;
    const isLocationHome = location.pathname === '/';

    const activeMenu = useSelector(selectHomeNavActive);
    const totalCartAmount = useSelector(selectTotalAmount);

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);

            if (element) element.scrollIntoView();
        }
    }, [hash]);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;

            if (isTop === hasShadow) setHasShadow(!isTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasShadow]);

    return (
        <div className={hasShadow ? 'navbar-wrapper shadow' : 'navbar-wrapper'}>
            <div className="app-wrapper">
                <div className="navbar">
                    <Link to="/">
                        <img src={assets.logo} alt="logo" className="logo" />
                    </Link>
                    <ul className="navbar-menu">
                        <li>
                            <Link to="/" className={isLocationHome && activeMenu === 'home' ? 'active' : ''}>
                                home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#explore-menu"
                                className={isLocationHome && activeMenu === 'menu' ? 'active' : ''}>
                                menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#app-download"
                                className={isLocationHome && activeMenu === 'mobile-app' ? 'active' : ''}>
                                mobile-app
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#footer"
                                className={isLocationHome && activeMenu === 'contact-us' ? 'active' : ''}>
                                contact us
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar-right">
                        <div className="navbar-bag-icon">
                            <Link to="/cart">
                                <img src={assets.basket_icon} alt="cart" />
                                <div className={totalCartAmount === 0 ? '' : 'dot'}></div>
                            </Link>
                        </div>
                        <button type="button" onClick={() => setShowLogin(true)}>
                            sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
