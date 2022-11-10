import React from 'react';
import { useParams } from 'react-router-dom';
import { formatSection } from '../utility';
import { useNavigate } from 'react-router-dom';
import './StoryDetails.css';

const StoryDetails = ({ stories, setStories }) => {
  const navigate = useNavigate()
  const params = useParams()
  const selectedStory = stories.find(story => story.title.includes(params.title))
  const publishedDate = new Date(selectedStory.published_date).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'})
  const updatedDate = new Date(selectedStory.updated_date).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'})

  return (
    <div className='full-details-container'>
      <p className='title'>{selectedStory.title}</p>
      <p className='byline'>{selectedStory.byline}</p>
      <div>
        <p className='date'>Published: {publishedDate}</p>
        <p className='date'>Updated: {updatedDate}</p>
      </div>
      <p className='section'>{formatSection(selectedStory.section)}</p>
      <p className='abstract'>{selectedStory.abstract}</p>
      <a className='link' href={selectedStory.url}>See Full Article</a>
      {selectedStory.multimedia && <img src={selectedStory.multimedia[1].url} alt='' className='image'/>}
      {!selectedStory.multimedia && <p className='no-img-big'>No Image Found</p>}
      <button className='home-button' onClick={() => navigate('/')}>Return to home page</button>
    </div>
  )
}

export default StoryDetails;