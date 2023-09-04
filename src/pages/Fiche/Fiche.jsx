import { useParams } from 'react-router-dom'
import '../../styles/Fiche.scss'
import properties from '../../datas/backEnd.js'
import Carousel from '../../components/Carousel/Carousel.jsx'
import Tags from '../../components/Tags/Tags.jsx'
import Stars from '../../components/Stars/Stars.jsx'

function Fiche() {
    const { idLogement } = useParams()
    const logementDetails = properties.find((property) => property.id === idLogement)
    
    return (
        <div>
            <Carousel fiche={logementDetails} />
            <div className='informations'>
                <div className='main-informations'>
                    <h1 className='main-informations__title'>{logementDetails.title}</h1>
                    <h2 className='main-informations__subtitle'>{logementDetails.location}</h2>
                    <Tags tagsList={logementDetails.tags} />
                </div>
                <div className='secondary-informations'>
                    <p>{logementDetails.host}</p>
                    <Stars grade={logementDetails.rating} />
                </div>
            </div>
        </div>
    )
}

export default Fiche