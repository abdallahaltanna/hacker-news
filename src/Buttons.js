import React from 'react';
import { useGlobalContext } from './context';

function Buttons() {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();
  return (
    <section className='btn-container'>
      <button disabled={isLoading} onClick={() => handlePage('dec')}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage('inc')}>
        next
      </button>
    </section>
  );
}

export default Buttons;
