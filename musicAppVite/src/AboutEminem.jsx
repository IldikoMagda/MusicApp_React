import React from "react";
import eminemProfile from './assets/profile.jpg'

export default function About(){
    return (
        <>
        {/* <div>
            <h1>About Eminem</h1>
        </div> */}
        <div className=" profileCard">
            <div className="pic-cont">
               <img src={eminemProfile} alt="Eminem profile Image" />
            </div>
            <p>
            Eminem, whose real name is Marshall Mathers, stands as an unparalleled figure in the realm of hip-hop and the broader music industry. With a career spanning decades, he has left an indelible mark on the world of rap and lyrical artistry. His greatness is a result of several remarkable attributes.
            First and foremost, Eminem's lyrical prowess is unparalleled. He possesses an uncanny ability to weave intricate rhymes, metaphors, and storytelling into his verses, showcasing a rare mastery of language and wordplay. His lyrics are a testament to his raw talent, often delving into personal struggles, social issues, and his own experiences, giving listeners an authentic glimpse into his life.
            Furthermore, Eminem's impact on the genre is immeasurable. He's not only achieved commercial success with numerous multi-platinum albums but has also been a trailblazer, pushing the boundaries of what is possible in hip-hop. His influence can be seen in countless aspiring artists who have tried to emulate his style, but few can match his skill and innovation.
            Eminem's resilience and ability to overcome adversity are equally remarkable. He's faced personal battles and controversies head-on, using his music to confront his demons and inspire others to do the same. His commitment to self-expression and honesty in his work has resonated with fans worldwide.
            In essence, Eminem's greatness lies in his exceptional lyrical talent, his pioneering contributions to the hip-hop genre, and his unwavering commitment to his craft. He remains a lyrical genius, a cultural icon, and an artist whose legacy will endure for generations to come.
            </p>
        </div>
        </>
    )
}