import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../../styles/Star.scss'

function Stars({grade}) {
    const range = [1, 2, 3, 4, 5];

    return (
        <div className='stars'>
            {range.map((element) => (
                <span key={element.toString()} className={grade >= element ? 'stars--full' : 'stars--empty'}>
                    <FontAwesomeIcon icon={faStar} />
                </span>
            ))}
        </div>
    )
}

export default Stars