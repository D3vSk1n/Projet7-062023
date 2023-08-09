import BannerPicture from '../../assets/homeBanner.png'
import '../../styles/Banner.scss'

function Banner() {
  return (
    <div className='banner'>
        <img alt="paysage côtier, bannière d'accueil" className='banner__picture' src={BannerPicture}/>
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
    );
}

export default Banner;