import React from 'react';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  // Ensure the PDF URL is correct and accessible
  console.log('PDF URL:', pdfUrl); // Debugging line to check the URL

  return (
    <div style={{ height: '500px', width: '100vw', border: '1px solid #ccc', marginBottom: '20px' }}>
      <iframe
        src={pdfUrl}
        style={{ width: '100vw', height: '100%' }}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default PDFViewer;
