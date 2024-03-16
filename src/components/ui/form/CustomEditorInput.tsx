import { Editor } from '@tinymce/tinymce-react';
import { Form, FormItemProps } from 'antd';

export type CustomEditorInputProps<T extends object> = {
  defaultValue?: string;
  onChange?: (value: string) => void;
  refEditor?: any;
  disabled?: boolean;
} & FormItemProps<T>;

export const CustomEditorInput = <T extends object>({
  label,
  name,
  rules,
  defaultValue,
  refEditor,
  onChange,
  disabled,
}: CustomEditorInputProps<T>) => {
  return (
    <Form.Item<T> label={label} name={name as any} labelCol={{ span: 24 }} rules={rules}>
      <Editor
        disabled={disabled}
        apiKey={import.meta.env.VITE_TINY_API_KEY}
        initialValue={defaultValue}
        onInit={() => 'gfd'}
        ref={refEditor}
        // onChange={(e) => {
        //   console.log('e', e.target.getContent());
        //   onChange && onChange(e.target.getContent());
        // }}
        onEditorChange={(e, editor) => {
          onChange && onChange(e);
        }}
        init={{
          menubar: false,
          plugins: ['image', 'code', 'table', 'link', 'media', 'codesample', 'lists'],
          toolbar: [
            'undo redo | bold italic underline strikethrough | numlist bullist | alignleft aligncenter alignright| forecolor backcolor | table link image media codesample',
          ],
          codesample_languages: [
            { text: 'HTML/XML', value: 'markup' },
            { text: 'JavaScript', value: 'javascript' },
            { text: 'CSS', value: 'css' },
            { text: 'PHP', value: 'php' },
            { text: 'Ruby', value: 'ruby' },
            { text: 'Python', value: 'python' },
            { text: 'Java', value: 'java' },
            { text: 'C', value: 'c' },
            { text: 'C#', value: 'csharp' },
            { text: 'C++', value: 'cpp' },
          ],
        }}
      />
    </Form.Item>
  );
};
