import { useState } from 'react'
import '../../styles/Carousel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Carousel({fiche}) {
    const [actualIndex, setActualIndex] = useState(0)
    
    function previousPicture() {
        setActualIndex(actualIndex - 1)
        if (actualIndex === 0)
        setActualIndex(fiche.pictures.length - 1)
    }

    function nextPicture() {
        setActualIndex(actualIndex + 1)
        if (actualIndex === fiche.pictures.length - 1)
        setActualIndex(0)
    }

    return (
        <div className='carousel'>
            <img src={`${fiche.pictures[actualIndex]}`} className='carousel__picture' alt={`${fiche.title}`}/>
                {fiche.pictures.length > 1 && (
                    <div className='carousel__optionalFunctions'>
                        <div className='carousel__chevrons'>
                            <FontAwesomeIcon icon={faChevronLeft} onClick={previousPicture} />
                            <FontAwesomeIcon icon={faChevronRight} onClick={nextPicture} />
                        </div>
                        <p className='carousel__count'>{actualIndex + 1} / {fiche.pictures.length}</p>
                    </div>
                )} 
        </div>
    )
}

export default Carousel