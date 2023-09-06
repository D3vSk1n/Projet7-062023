import { useState } from 'react'
import '../../styles/Collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Collapse({ title, paragraph }) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='collapse'>
                <button type='button' className='collapse__button' onClick={() => setIsOpen(false)}>
                    <h2>{title}</h2>
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            <div className='collapse__paragraph'>
                {Array.isArray(paragraph) ? paragraph.map((element, index) => {
                        return (
                            <p key={index}>{element}</p>
                        )
                    }) : <p>{paragraph}</p>
                    }
            </div>
        </div>
    ) : (
        <div className='collapse'>
            <button type='button' className='collapse__button' onClick={() => setIsOpen(true)}>
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>   
        </div>
    )
}

export default Collapse