import React from 'react';
import Typewriter from 'typewriter-effect';

const Typewritter = () => {
  return (
    <div className='typewriter'>
      <Typewriter
        options={{
          strings: ['Full Stack Software Developer working on Java, Spring Boot, JavaScript, React JS, Relational & Non-Relational Database'],
          autoStart: true,
          loop: true,
          delay: 5,
          pauseFor: 1500,
          deleteSpeed: 15,
        }}
      />
    </div>
  );
};

export default Typewritter;