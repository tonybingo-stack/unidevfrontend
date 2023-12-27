// AudioPlayer.js
import React, { useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/stream-audio');
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        audioRef.current.src = url;
      } catch (error) {
        console.error('Error fetching audio:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup, if needed
    };
  }, []);

  return (
    <audio controls ref={audioRef}>
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
