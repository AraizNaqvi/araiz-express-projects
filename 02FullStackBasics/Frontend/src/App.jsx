import { useState } from 'react'
import axios from 'axios';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data);
    })
    .catch((e) => {
      console.log(`Error: ${e}`);
    })
  })

  return (
    <>
      <h1>React Live</h1>
      <p>Jokes - {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.desc}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
