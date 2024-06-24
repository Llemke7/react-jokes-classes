import React, { useState, useEffect } from 'react';
import Joke from './Joke';
import { getJoke } from './jokeService';
import './JokeList.css';

const JokeList = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJokes = async () => {
      let jokes = [];
      while (jokes.length < 5) {
        let joke = await getJoke();
        if (!jokes.find(j => j.id === joke.id)) {
          jokes.push({ ...joke, score: 0 });
        }
      }
      setJokes(jokes);
      setLoading(false);
    };

    fetchJokes();
  }, []);

  const handleVote = (id, delta) => {
    setJokes(jokes.map(j =>
      j.id === id ? { ...j, score: j.score + delta } : j
    ));
  };

  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  return (
    <div className="JokeList">
      {jokes.map(j => (
        <Joke
          key={j.id}
          joke={j}
          upvote={() => handleVote(j.id, 1)}
          downvote={() => handleVote(j.id, -1)}
        />
      ))}
    </div>
  );
};

export default JokeList;

