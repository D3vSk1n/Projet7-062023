import Banner from "../../components/Banner/Banner"
import BannerPicture from '../../assets/aboutBanner.png'
import Collapse from '../../components/Collapse/Collapse'
import collapseData from '../../datas/collapseData.js'

function About() {
    return (
      <div className="about">
        <Banner>
          <img alt="paysage côtier, bannière d'accueil" className='banner__picture' src={BannerPicture}/>
        </Banner>
          <div className="collapses">
            {collapseData.map((collapse, index) => 
            <Collapse key={`${collapse}-${index}`} title={`${collapse.title}`} paragraph={`${collapse.paragraph}`} />
            )}
          </div>
      </div>
    )
}

export default About