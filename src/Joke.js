import React from 'react';
import './Joke.css';

const Joke = ({ joke, upvote, downvote }) => {
  return (
    <div className="Joke">
      <div>{joke.joke}</div>
      <div>
        <button onClick={upvote}>Upvote</button>
        <button onClick={downvote}>Downvote</button>
        <span>{joke.score}</span>
      </div>
    </div>
  );
};

export default Joke;

