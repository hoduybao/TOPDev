import ViewPdfContainer from '@/components/global/Recruitment/Content/ViewPdfContainer';

const PDFSession = ({ fileUrl }: { fileUrl: string }) => {
  return (
    <div>
      <ViewPdfContainer fileUrl={fileUrl} />
    </div>
  );
};

export default PDFSession;
