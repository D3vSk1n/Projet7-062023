import { Link } from 'react-router-dom'
import '../../styles/Error.scss'

function Error() {
    return (
        <div className='error'>
            <div className='mainbody'>
                <h1>404</h1>
                <p>Oups! La page que <br /> vous demandez n'existe pas.</p>
            </div>
                <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default Error