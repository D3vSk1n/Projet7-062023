import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Stars({grade}) {
    const range = [1, 2, 3, 4, 5]

    return (
        <div className='stars'>
            {range.map((element) =>
                grade >= element ? <span key={element.toString()} className='stars--full'><FontAwesomeIcon icon={faStar} /></span> : 
                <span className='stars--empty'><FontAwesomeIcon icon={faStar} /></span>
            )}
        </div>
    )
}

export default Stars