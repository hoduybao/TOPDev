import { OptionItems } from '@/+core/utilities/types/option.type';
import { Form, FormItemProps, Radio, RadioChangeEvent } from 'antd';
import './CustomRadioInput.scss';

export type CustomRadioInputProps<T extends object> = {
  placeholder?: string;
  spanCol?: number;
  disabled?: boolean;
  classNameRadio?: string;
  classNameForm?: string;
  type?: string;
  values: OptionItems;
  onChange?: (e: RadioChangeEvent) => void;
} & FormItemProps<T>;

export const CustomRadioInput = <T extends object>({
  label,
  name,
  rules,
  disabled,
  values,
  classNameRadio,
  onChange,
  classNameForm,
}: CustomRadioInputProps<T>) => {
  return (
    <Form.Item<T>
      name={name as any}
      rules={rules}
      className={`custom-radio ${classNameForm}`}
      label={label}
      labelCol={{ span: 24 }}
      onMetaChange={(e) => {
        console.log(e);
      }}
    >
      <Radio.Group
        disabled={disabled}
        className={`flex gap-4 ${classNameRadio}`}
        onChange={onChange}
      >
        {values.map((value) => (
          <Radio key={value.value} value={value.value}>
            {value.label}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};
