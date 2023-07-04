import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Fiche from './pages/Fiche/Fiche'
import Nous from './pages/Nous/Nous'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fiche" element={<Fiche />} />
                <Route path="/nous" element={<Nous />} />
            </Routes>
            <Home />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)