import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryPage from './components/CountryPage';
import CountryDetail from './components/CountryDetail';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CountryPage />} />
                <Route path="/country/:name" element={<CountryDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
