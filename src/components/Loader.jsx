import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className='loader'>
      <Spinner animation='border' size='xl' />
    </div>
  );
};

export default Loader;