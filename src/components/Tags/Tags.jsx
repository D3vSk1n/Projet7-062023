function Tags ({tagsList}) {
    return (
        <div className='main-informations__tags'>
            {tagsList.map((tag) => (<button className='tag' key={`${tag}-${tag.index}`}>{tag}</button>))}
        </div>
    )
}

export default Tags