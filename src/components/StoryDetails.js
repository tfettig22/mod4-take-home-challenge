import React from 'react';
import { useParams } from 'react-router-dom';
import { formatSection } from '../utility';
import { useNavigate } from 'react-router-dom';

const StoryDetails = ({ stories }) => {
  const navigate = useNavigate()
  const params = useParams()
  const selectedStory = stories.find(story => story.title.includes(params.title))
  const publishedDate = new Date(selectedStory.published_date).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'})
  const updatedDate = new Date(selectedStory.updated_date).toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'})
  console.log(selectedStory)

  return (
    <div>
      <p>{selectedStory.title}</p>
      <p>{selectedStory.byline}</p>
      <p>{selectedStory.abstract}</p>
      <p>Published: {publishedDate}</p>
      <p>Updated: {updatedDate}</p>
      <p>{formatSection(selectedStory.section)}</p>
      <p>{formatSection(selectedStory.subsection)}</p>
      <a href={selectedStory.url}>See Full Article</a>
      <img src={selectedStory.multimedia[1].url} alt=''/>
      <button onClick={() => navigate('/')}>Return to home page</button>
    </div>
  )
}

export default StoryDetails;