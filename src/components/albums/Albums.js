import {useEffect, useState} from "react";

import {albumsService} from "../../services";
import {Album} from "../album/Album";

function Albums () {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(value => setAlbums(value.data))
    }, [])

    return (
        <div className='blockInfo'>
            {
                albums.map(album => (
                    <Album
                        key={album.id}
                        album={album}
                    />))
            }
        </div>
    )
}

export {Albums};