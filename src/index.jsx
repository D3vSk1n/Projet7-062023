import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Fiche from './pages/Fiche/Fiche'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Footer from './components/Footer/Footer'
 
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fiche/:idLogement" element={<Fiche />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)