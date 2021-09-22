import React from 'react';
import { useGlobalContext } from './context';

function Stories() {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className='loading'></div>;
  }

  return (
    <section className='stories'>
      {hits.map((story) => {
        const { title, objectID, url, num_comments, author, points } = story;
        return (
          <div className='story' key={objectID}>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} points by {author} | {num_comments} comments
            </p>
            <div>
              <a
                href={url}
                className='read-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                read more
              </a>
              <button
                type='button'
                className='remove-btn'
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Stories;
