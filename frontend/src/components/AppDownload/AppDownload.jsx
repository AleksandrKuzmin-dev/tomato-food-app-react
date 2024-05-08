import { assets } from '../../assets/assets';
import useInViewBlock from '../../hooks/useInViewBlock';
import './appDownload.css';

const AppDownload = () => {
    const ref = useInViewBlock('mobile-app', 0.95);
    return (
        <div className="app-download" id="app-download" ref={ref}>
            <p>
                For Better Experience Download <br /> Tomato App
            </p>
            <p className="app-download__text">
                Install our convenient app for instant ordering of delicious food right on your device. Download the app
                now and enjoy quick and easy orders from the comfort of your home or office.
            </p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="Google Play" />
                <img src={assets.app_store} alt="App Store" />
            </div>
        </div>
    );
};

export default AppDownload;
