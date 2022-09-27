const Album = (props) => {
    let {album: userAlbum} = props;

    return (
        <div className='boxInfo'>
            {userAlbum.id}. {userAlbum.title}
        </div>
    )
}

export {Album};