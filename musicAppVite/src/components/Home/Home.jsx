import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const Home = () => {
  const [videoSources] = useState([
    'https://www.youtube.com/watch?v=7YuAzR2XVAM',
    'https://www.youtube.com/watch?v=S9bCLPwzSC0',
    'https://www.youtube.com/watch?v=lgT1AidzRWM',
  ]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    // Function to switch to the next video after a set time interval
    const switchToNextVideo = () => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === videoSources.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Set a timer to switch to the next video every, for example, 10 seconds
    const videoTimer = setInterval(switchToNextVideo, 270000); // 10 seconds

    // Clear the timer when the component unmounts
    return () => clearInterval(videoTimer);
  }, [videoSources]);

  return (
    <>
    <div className='page-container'>
    <div class="overlay"></div>
    <div className="welcome-container">
      <div className='welcome-message'>
        <h1>Welcome To The World Of Eminem</h1>
      </div>
    </div>
      <div className='player-wrapper'>
        <ReactPlayer
          url={videoSources[currentVideoIndex]}
          controls={true}
          muted
          playing={true}
          background={true}
          width={'100%'}
          height={'100%'}
        />
      </div>
    </div>
    </>
  );
};

export default Home;