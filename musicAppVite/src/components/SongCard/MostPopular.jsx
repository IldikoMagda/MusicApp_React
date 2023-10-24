import React, { useState, useRef, useMemo } from 'react';
  import data from '../../assets/data/data'


function SongCard({ song }) {
    const [isLiked, setIsLiked] = useState(false);
  
    const handleClick = () => {
      setIsLiked(!isLiked);
    };
  
    return (
        <div className='song-cardContainer'>
            <div className='albumphoto-cont'>
                <img src={song.AlbumPhoto} alt="Album Photo"/>
            </div>
            <div className={`song-card ${isLiked ? 'liked' : ''}`}>
                <h2>{song.Title}</h2>
                <h3>Album: {song.Album}</h3>
                <h3>Released: {song.Released}</h3>
                <p>{song.Description}</p>
                <button className="heart-button" onClick={handleClick}>
                <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill={isLiked ? 'purple' : 'none'}
                    stroke="purple"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="heart-icon"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 16.47 2 13.12 2 9.5 2 7.5 3.5 6 5.5 6c1.34 0 2.61.81 3.5 1.99C9.39 6.81 10.66 6 12 6c2 0 3.5 1.5 3.5 3.5 0 3.12-3.4 6.47-8.55 10.54L12 21.35z" />
                </svg>
                </button>
            </div>
      </div>
    );
  }
  
  export default function SongsFunction() {
    const [query, setQuery] = useState("");
    
    const filteredSongs = useMemo(() =>{
       return Object.values(data).filter(song =>{
       return song.Title.toLowerCase().includes(query.toLowerCase())
    })
  }, [query])

    console.log(filteredSongs)
    return (
      <>
      <div className="searchbar-cont">
        Search For Your Favourite Song : <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" />
      </div>
      <div className='all-songsContainer'>
        {filteredSongs.map((song, index) => {
          return <SongCard key={index} song={song} />;
        })}
      </div>
      </>
    );
}
