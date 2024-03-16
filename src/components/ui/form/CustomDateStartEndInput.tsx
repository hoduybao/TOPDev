import { DatePicker, Form, FormItemProps } from 'antd';

export type CustomDateStartEndInputProps<T extends object> = {
  placeholder?: string;
  spanCol?: number;
  disabled?: boolean;
  classNameInput?: string;
  classNameForm?: string;
} & FormItemProps<T>;

const { RangePicker } = DatePicker;

export const CustomDateStartEndInput = <T extends object>({
  label,
  name,
  rules,
  disabled,
  classNameInput,
  spanCol,
  classNameForm,
}: CustomDateStartEndInputProps<T>) => {
  return (
    <Form.Item<T>
      name={name as any}
      rules={rules}
      label={label}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: spanCol }}
      className={classNameForm}
    >
      <RangePicker disabled={disabled} className={`h-[39px] w-full ${classNameInput}`} />
    </Form.Item>
  );
};
