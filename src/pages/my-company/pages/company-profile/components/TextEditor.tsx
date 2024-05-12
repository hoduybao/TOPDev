import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface PropType {
  height: number;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const TextEditor = (props: PropType) => {
  const { height, content, setContent } = props;

  return (
    <ReactQuill
      style={{
        width: '100%',
        height: `${height}px`,
        maxHeight: `${height}px`,
        marginBottom: '50px',
      }}
      theme='snow'
      value={content}
      onChange={setContent}
    />
  );
};

export default TextEditor;
