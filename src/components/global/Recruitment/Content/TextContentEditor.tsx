import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface PropType {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const TextContentEditor = (props: PropType) => {
  const { content, setContent } = props;

  return (
    <ReactQuill
      style={{ width: '100%', height: '300px', maxHeight: '300px', marginBottom: '50px' }}
      theme='snow'
      value={content}
      onChange={setContent}
    />
  );
};

export default TextContentEditor;
