import { Form, FormItemProps, InputNumber } from 'antd';

export type CustomTextInputProps<T extends object> = {
  placeholder?: string;
  spanCol?: number;
  disabled?: boolean;
  classNameInput?: string;
  classNameForm?: string;
} & FormItemProps<T>;

export const CustomNumberInput = <T extends object>({
  label,
  name,
  rules,
  placeholder = '',
  disabled,
  classNameInput,
  spanCol,
  classNameForm,
}: CustomTextInputProps<T>) => {
  return (
    <Form.Item<T>
      name={name as any}
      rules={rules}
      label={label}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: spanCol }}
      className={classNameForm}
    >
      <InputNumber
        placeholder={placeholder}
        className={`h-[39px] ${classNameInput} w-full`}
        disabled={disabled}
      />
    </Form.Item>
  );
};
