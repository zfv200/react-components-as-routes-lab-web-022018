import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorRender = directors.map(director=>{
    return (
      <div>
        <h2>Name: {director.name}</h2>
        <h3>Movies:</h3>
        <ul>
          {director.movies.map(movie=><li>{movie}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorRender}
    </div>
  );
}

export default Directors
