import './StoryCards.css';
import React from 'react';
import { formatSection } from '../utility';
import { useNavigate } from 'react-router-dom';

function StoryCards({ stories }) {
  const navigate = useNavigate()

  const storyCards = stories.map(story => {
    let date = new Date(story.published_date).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'})
    return (
      <div key={story.title} className='story-card'>
        {story.multimedia && <img src={story.multimedia[2].url} alt='' className='story-img-small'/>}
        {!story.multimedia && <p className='no-img'>No Image Found</p>}
        <div className='details-container'>
          <p className='story-title'>{story.title}</p>
          <p className='story-section'>{formatSection(story.section)}</p>
          <p className='story-pub-date'>Published: {date}</p>
          <button className='story-details-btn' onClick={() => navigate(`/story/${story.title}`)}>Story Details</button>
        </div>
      </div>
    )
  })

  return (
    <div className="cards-container">
      {storyCards}
    </div>
  );
}

export default StoryCards;