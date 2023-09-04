import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import '../../styles/Header.scss'
 
function Header() {
    return (
        <header id='header'>
            <nav className='header'>
                <img alt="Logo du site Kasa" className='header__logo' src={Logo}/>
                <div>
                    <NavLink to="/" className={({ isActive }) =>
                    isActive ? 'header__link header__link--active' : 'header__link'}>Accueil</NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                    isActive ? 'header__link header__link--active' : 'header__link'}>A Propos</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header