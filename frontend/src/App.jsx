import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const App = () => {

    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <ScrollToTop />
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
            <div className="app">
                <Navbar setShowLogin={setShowLogin} />
                <div className="app-wrapper">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='order' element={<PlaceOrder />} />
                        <Route path='*' element=<PageNotFound /> />
                    </Routes>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default App;
