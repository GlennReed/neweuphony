// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// function PDF() {
//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({ numPages }) {
//       setNumPages(numPages);
//     }

//     return (
//       <div>
//         <Document
//           file="/scores/bartok.pdf"
//           onLoadSuccess={onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>Page {pageNumber} of {numPages}</p>
//       </div>
//     );
//   }

// export default PDF;

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import './Sample.less';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default function Sample() {
  const [file, setFile] = useState();
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <header>
        <h1>Musical Score</h1>
      </header>
      <div className="Example__container">
        <div className="Example__container__load">
          <label htmlFor="file" style={{ fontSize: 'large' }}>
            Select from directory:{' '}
          </label>{' '}
          <input onChange={onFileChange} type="file" />
        </div>
        <div className="Example__container__document">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
