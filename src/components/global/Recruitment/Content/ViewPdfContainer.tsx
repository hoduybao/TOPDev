// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type ViewPdfContainerProps = {
  fileUrl?: string;
};

const ViewPdfContainer = ({ fileUrl }: ViewPdfContainerProps) => {
  const PDFJS_VERSION = '3.11.174';
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  if (!fileUrl) return null;
  return (
    <Worker
      workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`}
    >
      <div className='h-[90vh]'>
        <Viewer
          fileUrl={fileUrl || ''}
          plugins={[
            // Register plugins
            defaultLayoutPluginInstance,
          ]}
        />
      </div>
    </Worker>
  );
};

export default ViewPdfContainer;
