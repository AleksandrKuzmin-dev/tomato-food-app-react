import { Link } from 'react-router-dom';
import useInViewBlock from '../../hooks/useInViewBlock';
import './header.css';

const Header = () => {
    const ref = useInViewBlock('home');

    return (
        <div className="header" ref={ref}>
            <div className="header-contents">
                <h2>Order your favorite food here</h2>
                <p>
                    Choose from a diverse menu featuring a delectable array of dishes crafted with the finest
                    ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining
                    experience, one delicious meal at a time.
                </p>
                <Link to="/#explore-menu">View menu</Link>
            </div>
        </div>
    );
};

export default Header;
