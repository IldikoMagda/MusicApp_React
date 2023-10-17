import React, { useState } from 'react';
import './App.css';
import data from './data'

//     },
//     3 :{
//         "Title": "Lose yourself", 
//         "Album": "The Eminem Show", 
//         "Released": 2002,
//         "Description" : "Lose Yourself is a powerful Eminem song that serves as the theme for the movie 8 Mile. It's a gripping portrayal of the struggles, determination, and the pursuit of success in the world of rap. The song's intense beat, emotional lyrics, and Eminem's iconic delivery make it a timeless anthem."
//     },
//     4:{
//         "Title": "The Real Slim Shady", 
//         "Album": "The Marshall Mathers LP", 
//         "Released": 2000,
//         "Description" : "The Real Slim Shady is a playful and satirical Eminem track that mocks celebrities and pop culture. Known for its catchy chorus and humorous lyrics, the song establishes Eminem's alter ego while challenging societal norms and hypocrisy. It's a humorous and irreverent commentary on contemporary culture and fame."
//     }, 
//     5:{
//         "Title": "Superman", 
//         "Album": "The Eminem Show", 
//         "Released": 2002,
//         "Description" : "Superman is a poignant and introspective song that delves into the complexities of love and commitment. It reflects his vulnerabilities, struggles with fame, and the emotional toll on his relationships. The track features a melodic, somber tone, offering a glimpse into the artist's personal challenges and desires."

//     }, 
//     6:{
//         "Title": "Till I collapse", 
//         "Album": "The Eminem Show", 
//         "Released": 2002,
//         "Description": 
//         "Till I Collapse is an iconic Eminem song featuring Nate Dogg. It's a high-energy rap anthem known for its intense and motivational lyrics. Eminem's relentless determination and resilience shine through as he raps about pushing through adversity. The track's powerful beats and fiery delivery make it a timeless hip-hop classic."

//     },
//     7:{
//         "Title": "Stan", 
//         "Album": "The Marshall Mathers LP", 
//         "Released": 2000,
//         "Description": "Stan is a narrative-driven rap song featuring Dido. It tells the story of an obsessive fan named Stan who writes letters to Eminem, expressing his admiration. However, as Stan's letters become more unhinged, the song delves into themes of fandom, mental instability, and tragic consequences. It's a haunting exploration of celebrity and its impact on fans."

//     },
//     8:{
//         "Title": "Not Afraid", 
//         "Album": "Recover", 
//         "Released": 2010,
//         "Description": "I'm Not Afraid  is an uplifting rap anthem that reflects his personal growth and recovery from addiction. The song exudes confidence and resilience, as Eminem raps about facing his demons and finding strength within himself. It's a message of self-empowerment and a declaration of fearlessness."

//     },
//     9:{
//         "Title": "Cleanin' out my closet", 
//         "Album": "The Eminem Show", 
//         "Released": 2002,
//         "Description": "Cleaning Out My Closet is a deeply personal and emotional track where he addresses his troubled relationship with his mother. He vents his frustrations and regrets, reflecting on the pain and trauma from his childhood. It's a raw and cathartic song that explores complex family dynamics and personal healing."

//     },
//     10: {
//         "Title": "Beautiful", 
//         "Album": "Relapse", 
//         "Released": 2009,
//         "Description": "Beautiful by Eminem is a introspective and emotionally charged song. Eminem delves into his struggles with fame, substance abuse, and self-doubt. The lyrics reveal his inner turmoil, contemplating the beauty of life amidst chaos. The song's somber tone and powerful storytelling make it a poignant reflection on the highs and lows of his life, offering glimpses of hope and resilience."

//     }
// }
function SongCard({ song }) {
    const [isLiked, setIsLiked] = useState(false);
  
    const handleClick = () => {
      setIsLiked(!isLiked);
    };
  
    return (
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
    );
  }
  
  export default function SongsFunction() {
    console.log("second funct ")
    return (
      <div>
        {Object.keys(data).map((key) => {
          const song = data[key];
          return <SongCard key={key} song={song} />;
        })}
      </div>
    );
}
