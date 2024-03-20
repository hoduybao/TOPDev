import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useParams } from 'react-router-dom';
import { useGetApplicationByIdQuery } from '../../../../+core/redux/apis/common/application/application.api';
import { Spin } from 'antd';

// https://react-pdf-viewer.dev
// cors handler with firebase: https://stackoverflow.com/questions/47768136/cors-on-firebase-storage

const ViewPdfContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetApplicationByIdQuery(id);
  console.log(data);

  const PDFJS_VERSION = '3.4.120';
  const MOCK_PDF_URL =
    'https://piwwbijgpwvzynpsplfn.supabase.co/storage/v1/object/public/uploads/files/CTDT%20K20%20KTPM.pdf';
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Spin spinning={isLoading}>
      {data && data.cvUrl && (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl={data.cvUrl}
            // fileUrl={MOCK_PDF_URL}
            plugins={[
              // Register plugins
              defaultLayoutPluginInstance,
            ]}
          />
        </Worker>
      )}
    </Spin>
  );
};

export default ViewPdfContainer;
