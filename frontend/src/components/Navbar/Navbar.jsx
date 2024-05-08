import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectHomeNavActive } from '../../store/slices/homeNavActive.slice';
import { assets } from '../../assets/assets';

import './navbar.css';

const Navbar = ({ setShowLogin }) => {
    const activeMenu = useSelector(selectHomeNavActive);
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;

            if (isTop === hasShadow) {
                setHasShadow(!isTop);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasShadow]);

    const scrollToHome = () => {
        const homeElement = document.getElementById('root');
        homeElement.scrollIntoView();
    };

    return (
        <div className={hasShadow ? 'navbar-wrapper shadow' : 'navbar-wrapper'}>
            <div className="app-wrapper">
                <div className="navbar">
                    <Link
                        to="/"
                        onClick={() => {
                            scrollToHome();
                        }}>
                        <img src={assets.logo} alt="" className="logo" />
                    </Link>
                    <ul className="navbar-menu">
                        <Link
                            to="/"
                            onClick={() => {
                                scrollToHome();
                            }}
                            className={activeMenu === 'home' ? 'active' : 'null'}>
                            home
                        </Link>
                        <a href="#explore-menu" className={activeMenu === 'menu' ? 'active' : 'null'}>
                            menu
                        </a>
                        <a href="#app-download" className={activeMenu === 'mobile-app' ? 'active' : 'null'}>
                            mobile-app
                        </a>
                        <a href="#footer" className={activeMenu === 'contact-us' ? 'active' : 'null'}>
                            contact us
                        </a>
                    </ul>
                    <div className="navbar-right">
                        <img src={assets.search_icon} />
                        <div className="navbar-bag-icon">
                            <Link to="/cart">
                                <img src={assets.basket_icon} alt="" />
                                <div className="dot"></div>
                            </Link>
                        </div>
                        <button onClick={() => setShowLogin(true)}>sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
