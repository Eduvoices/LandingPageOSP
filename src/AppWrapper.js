import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYou';

const AppWrapper = () => {
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route path="*" element={<App />} />
            <Route path='/' element={<LandingPage />}/>
            <Route path='/thankyou' element={<ThankYouPage />} />
        </Routes>
    );
};

export default AppWrapper;
