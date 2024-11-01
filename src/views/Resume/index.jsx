import Button from 'react-bootstrap/Button';
import { Container, Row } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import React, { useState, useEffect } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdf from '../../assets/Syed_Saadat_Ali_Kazmi.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);
  const [resumePages, setResumePages] = useState(null);

  useEffect(() => setWidth(window.innerWidth), []);

  return (
    <div>
      <Container fluid className='resume-section'>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href={pdf}
            target='_blank'
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download
          </Button>
        </Row>
        <Row className='resume'>
          <Document
            className='resume-document'
            file={pdf}
            onLoadSuccess={({ _pdfInfo }) => setResumePages(_pdfInfo?.numPages)}
          >
            {Array.from(new Array(resumePages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
              />
            ))}
          </Document>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href={pdf}
            target='_blank'
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;