import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import StoryCards from './StoryCards';
import Filter from './Filter';
import StoryDetails from './StoryDetails';
import { getStories } from '../apiCalls';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories('home').then(data => {
      setStories(data.results);
    })
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Filter setStories={setStories} />
            <StoryCards stories={stories} />
          </>
        }/>
        <Route path='/story/:title' element={
          <>
            <StoryDetails stories={stories} />
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
