import React from 'react';
import { Row } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';

function Github() {
  return (
    <Row className='github'>
      <h1 className='project-heading' style={{ paddingBottom: '20px' }}>
        Days I <strong className='teal'>Code</strong>
      </h1>
      <GitHubCalendar
        username='sadaatalikazmi'
        blockSize={15}
        blockMargin={5}
        color='#2a8a92'
        fontSize={16}
      />
    </Row>
  );
};

export default Github;