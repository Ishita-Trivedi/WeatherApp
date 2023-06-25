import React from 'react';
import './bg.css'; // Import the CSS file for styling
import bgv from './day.mp4';
const BackgroundVideo = () => {
  return (
    <div className="background-video">
       <video src={bgv}autoPlay  loop/>
    </div>
  );
};

export default BackgroundVideo;
