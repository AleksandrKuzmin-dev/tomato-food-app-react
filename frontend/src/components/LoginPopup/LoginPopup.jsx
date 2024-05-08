import { useRef, useState } from 'react';
import useKeyListener from '../../hooks/useKeyListener';
import { assets } from '../../assets/assets';

import './loginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState('Sign Up');
    const ref = useRef();

    const closePopup = () => {
        setShowLogin(false);
    }

    useKeyListener('Escape', closePopup);

    const onCloseByClick = (target) => {
        target === ref.current && closePopup();
    };

    return (
        <div className="login-popup" ref={ref} onClick={(event) => onCloseByClick(event.target)}>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <button
                        className="login-popup-close"
                        type="button"
                        onClick={closePopup}>
                        <img src={assets.cross_icon} alt="close" />
                    </button>
                </div>
                <div className="login-popup-inputs">
                    {currentState === 'Login' ? null : <input type="text" placeholder="Your name" required></input>}
                    <input type="email" placeholder="Your email" required></input>
                    <input type="password" placeholder="Password" required></input>
                </div>
                <button className="login-popup__account-btn">
                    {currentState === 'Sign Up' ? 'Create account' : 'Login'}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>

                {currentState === 'Login' ? (
                    <p>
                        Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
