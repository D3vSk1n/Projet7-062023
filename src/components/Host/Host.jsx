import '../../styles/Host.scss'

function Host({hostInfo}) {
    return (
        <div className='host'>
            <p className='host__name'>{hostInfo.name}</p>
            <div className='host__picture'>
                <img  src={hostInfo.picture} alt={hostInfo.picture}/>
            </div>
        </div>
    )
}

export default Host