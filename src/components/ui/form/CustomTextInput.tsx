import { Form, Input } from 'antd';
import { Rule } from 'antd/es/form';

export type CustomTextInputProps<T extends object> = {
  placeholder?: string;
  spanCol?: number;
  name?: keyof T | (keyof T | number)[];
  disabled?: boolean;
  classNameInput?: string;
  classNameForm?: string;
  type?: string;
  defaultValue?: string;
  prefix?: React.ReactNode;
  label?: React.ReactNode;
  rules?: Rule[];
};

export const CustomTextInput = <T extends object>({
  label,
  name,
  rules,
  placeholder = '',
  disabled,
  classNameInput,
  spanCol,
  classNameForm,
  defaultValue,
  prefix,
  type = 'text',
}: CustomTextInputProps<T>) => {
  return (
    <Form.Item<T>
      name={name as any}
      rules={rules}
      labelCol={{ span: 24 }}
      label={label && <label className='whitespace-normal w-full'>{label}</label>}
      wrapperCol={{ span: spanCol }}
      className={`${classNameForm} `}
    >
      <Input
        placeholder={placeholder}
        defaultValue={defaultValue}
        prefix={prefix}
        type={type}
        className={`h-[39px] ${classNameInput}`}
        disabled={disabled}
      />
    </Form.Item>
  );
};
