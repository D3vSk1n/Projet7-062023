import '../../styles/Card.scss'

function Card({ title, cover }) {
    return (
      <div>
        <img src={cover} className='card__cover' alt="illustration du logement" />
        <div className='card__filter'></div>
        <h2 className='card__title'>{title}</h2>
      </div>
    )
  }
  
  export default Card