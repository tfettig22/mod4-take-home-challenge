import React from 'react';
import { getStories } from '../apiCalls';
import { formatSection } from '../utility';
import './Filter.css';

const Filter = ({ setStories }) => {

  const onChangeHandler = (value) => {
    getStories(value).then(data => {
      setStories(data.results)
    })
  }

  const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']

  const options = sections.map(section => {
    return (
      <option key={section} value={section}>{formatSection(section)}</option>
    )
  })

  return (
    <div className='dropdown'>
      <label className='label' htmlFor='section-select'>Choose a section: </label>
      <select className='dropdown-select' name='sections' id='section-select' onChange={(event) => onChangeHandler(event.target.value)}>
        <option value='' hidden={true}>Please select an option</option>
        {options}
      </select>
    </div>
  )
}

export default Filter;