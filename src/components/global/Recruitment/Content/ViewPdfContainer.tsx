import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// https://react-pdf-viewer.dev

const ViewPdfContainer = () => {
  const PDFJS_VERSION = '3.4.120';
  const MOCK_PDF_URL =
    'https://piwwbijgpwvzynpsplfn.supabase.co/storage/v1/object/public/uploads/files/CTDT%20K20%20KTPM.pdf';
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.js`}>
      <Viewer
        fileUrl={`${MOCK_PDF_URL}`}
        plugins={[
          // Register plugins
          defaultLayoutPluginInstance,
        ]}
      />
    </Worker>
  );
};

export default ViewPdfContainer;
