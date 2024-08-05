import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';
import './layout-blue.css'
import './theme-blue.css'

import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYou';



const App = () => {
    return (
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path='/thankyou' element={<ThankYouPage />} />
                    </Routes>
    );
};

export default App;
