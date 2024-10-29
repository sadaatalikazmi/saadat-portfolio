// import React from "react";
// import Typewriter from "typewriter-effect";

// function Type() {
//   return (
//     <Typewriter
//       options={{
//         strings: [
//           "Software Developer",
//           "MERN Stack Developer",
//         ],
//         autoStart: true,
//         loop: true,
//         deleteSpeed: 50,
//       }}
//     />
//   );
// }

// export default Type;

import React from 'react';
import Typist from 'react-typist';

const Type = () => {
  return (
    <div className='typist'>
      <Typist>
        <span>Software Developer</span>
        <Typist.Delay ms={1000} /> {/* Delay before starting the next line */}
        <br />
        <span>MERN Stack Developer</span>
        <Typist.Delay ms={1000} /> {/* Delay before starting the next line */}
        <br />
        <span>React JS, Node JS, JavaScript</span>
      </Typist>
    </div>
  );
}

export default Type;