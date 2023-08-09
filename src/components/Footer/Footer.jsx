import Logo from '../../assets/footerLogo.png'
import '../../styles/Footer.scss'
 
function Footer() {
    return (
        <footer>
            <div className='footer'>
                <img alt="Logo du site Kasa" className='footer__logo' src={Logo}/>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer