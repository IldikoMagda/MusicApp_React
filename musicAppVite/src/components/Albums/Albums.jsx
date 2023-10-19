import React from 'react'
import albums from '../../assets/data/albums'

function AlbumCard({ album }){
    return (
        <>
            <div className="album-container">
                <div className="albumphoto-cont">
                    <img src={album.image} alt="album photo" />
                </div>
                <div className="albumdetails">
                    <h2 className="album-title">{album.name}</h2>
                    <h3 className="album-released">{album.released}</h3>
                </div>
                <div className="reaction-container">
                    {/* need to icon button each with a field of counter touching */}
                </div>
            </div>
        </>
    )
}
const Albums = () => {
  return (
    <>
        <h1>Albums</h1>
        <h2>See a collection of Eminem's albums, like them or buy them!</h2>
        <div>
        {Object.keys(albums).map((key) => {
          const album = albums[key];
          return <AlbumCard key={key} album={album} />;
        })}
        </div>
    </>
  )
}
export default Albums