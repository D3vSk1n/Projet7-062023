import Banner from "../../components/Banner/Banner"
import BannerPicture from '../../assets/homeBanner.png'
import Card from '../../components/Card/Card'
import properties from '../../datas/backEnd.js'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <Banner>
        <img alt="paysage côtier, bannière d'accueil" className='banner__picture' src={BannerPicture}/>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>

      <div className="cards">
        {properties.map((property) => (
          <Link key={`Link-${property.id}`} className="card" to={`/fiche/${property.id}`}>
            <Card
              key={`${property.id}`}
              title={`${property.title}`}
              cover={`${property.cover}`} 
            />
          </Link>
        ))}
      </div>
      
    </div>
  )
}

export default Home