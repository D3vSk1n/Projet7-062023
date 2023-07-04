import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Fiche from './pages/Fiche/Fiche'
import Nous from './pages/Nous/Nous'
import Header from './components/Header/Header'
import Error from './components/Error/Error'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fiche" element={<Fiche />} />
                <Route path="/nous" element={<Nous />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)