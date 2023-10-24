import React, {useState} from 'react'
import albums from '../../assets/data/albums'
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../../action-creators'

function AlbumCard({ album }){
    const imageSrc = album.image || '';
    const { like, dislike } = actionCreators
    const dispatch = useDispatch()

    // State variables to track likes and dislikes
    const [likes, setLikes] = useState(album.liked);
    const [dislikes, setDislikes] = useState(album.disliked);

    const handleLike =() =>{
        dispatch(like(album.name,1));
    // Update the local state to reflect the change
        setLikes(likes + 1);
    }
    const handleDislike =() =>{
        dispatch(dislike(album.name,1));
    // Update the local state to reflect the change
        setDislikes(dislikes + 1);
    }
    return (
        <div className="album-container">
          <div className="albumIMG-cont">
            <img src={imageSrc} alt="album photo" />
          </div>
          <div className="albumdetails">
            <h2 className="album-title">{album.name}</h2>
            <h3 className="album-released">{album.released}</h3>
            <div className="reaction-container">
              <div className="like">
                <button onClick={handleLike}>Like ({likes})</button>
              </div>
              <div className="dislike">
                <button onClick={handleDislike}>Dislike ({dislikes})</button>
              </div>
            </div>
          </div>
        </div>
      );
}
const AllAlbums = () => {
    const albumList = Object.values(albums); // Convert the object values to an array
    return (
      <div className="all-albums">
        {albumList.map((album, i) => {
          return (
            <>
              <AlbumCard key={i} album={album} />
            </>
          );
        })}
      </div>
    );
  };
const Albums = () => {
  return (
    <> 
    <div className="album-intro">
        <h1>Find All Albums by Eminem, like them or buy them!</h1>
    </div>
        <div className='album-page'>
        <AllAlbums/>
        </div>
    </>
  )
}
export default Albums