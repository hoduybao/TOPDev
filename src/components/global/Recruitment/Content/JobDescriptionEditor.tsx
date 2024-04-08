import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface PropType {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const JobDescriptionEditor = (props: PropType) => {
  const { description, setDescription } = props;

  return (
    <ReactQuill
      style={{ width: '100%', height: '300px', maxHeight: '300px', marginBottom: '50px' }}
      theme='snow'
      value={description}
      onChange={setDescription}
    />
  );
};

export default JobDescriptionEditor;