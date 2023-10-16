import React from "react";
import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import myIcon from './assets/heart-regular.svg'
import './App.css'

export default function Songs(){
    // need a songs object or class
    const Songs ={
        1 :{
            "Title": "Mockingbird", 
            "Album": "Encore", 
            "Released": 2005,
            "Description": "Mockingbird is a heartfelt Eminem song that reflects on his struggles and relationships, particularly with his daughter Hailie. Through poignant lyrics and a melancholic melody, he apologizes, expresses love, and offers solace, making it a touching, introspective track that showcases Eminem's vulnerability and depth as an artist."
        },
        2 :{
            "Title": "Without Me", 
            "Album": "The Eminem Show", 
            "Released": 2002,
            "Description" : "Without Me by Eminem is an energetic, humorous rap track. Eminem playfully returns to the music scene, declaring himself as the savior of hip-hop. The song features catchy beats, witty lyrics, and clever wordplay, making it a lighthearted and self-referential addition to his discography."

        },
        3 :{
            "Title": "Lose yourself", 
            "Album": "The Eminem Show", 
            "Released": 2002,
            "Description" : "Lose Yourself is a powerful Eminem song that serves as the theme for the movie 8 Mile. It's a gripping portrayal of the struggles, determination, and the pursuit of success in the world of rap. The song's intense beat, emotional lyrics, and Eminem's iconic delivery make it a timeless anthem."
        },
        4:{
            "Title": "The Real Slim Shady", 
            "Album": "The Marshall Mathers LP", 
            "Released": 2000,
            "Description" : "The Real Slim Shady is a playful and satirical Eminem track that mocks celebrities and pop culture. Known for its catchy chorus and humorous lyrics, the song establishes Eminem's alter ego while challenging societal norms and hypocrisy. It's a humorous and irreverent commentary on contemporary culture and fame."
        }, 
        5:{
            "Title": "Superman", 
            "Album": "The Eminem Show", 
            "Released": 2002,
            "Description" : "Superman is a poignant and introspective song that delves into the complexities of love and commitment. It reflects his vulnerabilities, struggles with fame, and the emotional toll on his relationships. The track features a melodic, somber tone, offering a glimpse into the artist's personal challenges and desires."

        }, 
        6:{
            "Title": "Mockingbird", 
            "Album": "Encore", 
            "Released": 2005,
            "Description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magnam nemo delectus quam deserunt animi ducimus veniam iste possimus sint similique harum atque nobis. Totam enim ducimus aliquam provident. Nostrum voluptatem consequuntur eum voluptatibus veniam inventore dolore a distinctio veritatis voluptas rerum eos eligendi perferendis possimus, accusamus nulla optio reprehenderit."

        },
        7:{
            "Title": "Mockingbird", 
            "Album": "Encore", 
            "Released": 2005,
            "Description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magnam nemo delectus quam deserunt animi ducimus veniam iste possimus sint similique harum atque nobis. Totam enim ducimus aliquam provident. Nostrum voluptatem consequuntur eum voluptatibus veniam inventore dolore a distinctio veritatis voluptas rerum eos eligendi perferendis possimus, accusamus nulla optio reprehenderit."

        },
        8:{
            "Title": "Mockingbird", 
            "Album": "Encore", 
            "Released": 2005,
            "Description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magnam nemo delectus quam deserunt animi ducimus veniam iste possimus sint similique harum atque nobis. Totam enim ducimus aliquam provident. Nostrum voluptatem consequuntur eum voluptatibus veniam inventore dolore a distinctio veritatis voluptas rerum eos eligendi perferendis possimus, accusamus nulla optio reprehenderit."

        },
        9:{
            "Title": "Mockingbird", 
            "Album": "Encore", 
            "Released": 2005,
            "Description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magnam nemo delectus quam deserunt animi ducimus veniam iste possimus sint similique harum atque nobis. Totam enim ducimus aliquam provident. Nostrum voluptatem consequuntur eum voluptatibus veniam inventore dolore a distinctio veritatis voluptas rerum eos eligendi perferendis possimus, accusamus nulla optio reprehenderit."

        },
        10: {
            "Title": "Mockingbird", 
            "Album": "Encore", 
            "Released": 2005,
            "Description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magnam nemo delectus quam deserunt animi ducimus veniam iste possimus sint similique harum atque nobis. Totam enim ducimus aliquam provident. Nostrum voluptatem consequuntur eum voluptatibus veniam inventore dolore a distinctio veritatis voluptas rerum eos eligendi perferendis possimus, accusamus nulla optio reprehenderit."

        }
    }
    return (
        <div>
      {Object.keys(Songs).map((key) => {
        const song = Songs[key];
        return (
          <div key={key}>
            <h2>{song.Title}</h2>
            <p>Album: {song.Album}</p>
            <p>Released: {song.Released}</p>
            <p>Description: {song.Description}</p>
            <button className="heart-button">
                <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
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
      })}
    </div>
  );
}