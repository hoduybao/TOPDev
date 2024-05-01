import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type ViewPdfContainerProps = {
  fileUrl?: string;
};

const ViewPdfContainer = ({ fileUrl }: ViewPdfContainerProps) => {
  const PDFJS_VERSION = '3.4.120';
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return fileUrl ? (
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.js`}>
      <Viewer
        fileUrl={fileUrl || ''}
        plugins={[
          // Register plugins
          defaultLayoutPluginInstance,
        ]}
      />
    </Worker>
  ) : null;
};

export default ViewPdfContainer;
