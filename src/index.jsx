import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Fiche from './pages/Fiche/Fiche'
import Nous from './pages/Nous/Nous'
import Error from './pages/Error/Error'
import Footer from './components/Footer/Footer'
 
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
            <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)