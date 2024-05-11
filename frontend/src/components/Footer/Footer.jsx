import {Link} from 'react-router-dom';
import { assets } from '../../assets/assets';
import useInViewBlock from '../../hooks/useInViewBlock';
import './footer.css';

const Footer = () => {
    const ref = useInViewBlock('contact-us', 0.95);
    const demo = () => alert('Это демонстрационная версия, данная функция недоступна.');

    return (
        <div className="footer" id="footer" ref={ref}>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo" />
                    <p>
                    At Tomato, we're not just committed, but truly passionate about delivering a culinary experience that tantalizes your tastebuds with the freshest and most delicious meals direct to your doorstep. Our unwavering dedication to providing both premium quality and rapid service ensures that you can savor a dining experience that rivals your favorite restaurants, while relishing the comfort and convenience of your own home. We believe in turning every meal into a special occasion, and with Tomato, you are just a click away from an extraordinary home dining adventure.
                    </p>
                    <div className="footer-social-icons">
                        <a onClick={demo}><img src={assets.facebook_icon} alt="facebook" /></a>
                        <a onClick={demo}><img src={assets.twitter_icon} alt="twitter" /></a>
                        <a onClick={demo}><img src={assets.linkedin_icon} alt="linkedin" /></a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><a onClick={demo}>About us</a></li>
                        <li><a onClick={demo}>Delivery</a></li>
                        <li><a onClick={demo}>Privacy policy</a></li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li><a onClick={demo}>+1-212-456-7890</a></li>
                        <li><a onClick={demo}>contact@tomato.ru</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Tomato - All Right Reserved.</p>
        </div>
    );
};

export default Footer;
