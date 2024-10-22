import React from 'react';
import RickRoll from '../../../../assets/raw/rick_roll.mp4';
import './TrailerVideo.scss';
import ReactPlayer from 'react-player';
import { MoneyIcon } from '../../../atoms/Icon/Icon'; // Example of a custom icon import

const TrailerVideo = () => {

  return (
    <div className="video-container">
      <h1>Trailer Video</h1>
      <div className="divine-line" />
      <div className="video-player">
        <ReactPlayer
          url={RickRoll}
          controls={true}
          width="100%"
          height="400px"
          light="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LBvvslO1duZPwmTPg0plWvXMW34ZdhJhUQ&s"
        />
      </div>
    </div>
  );
};

export default TrailerVideo;
