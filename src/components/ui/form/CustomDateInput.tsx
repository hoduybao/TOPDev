import { DatePicker, Form, FormItemProps } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

export type CustomDateInputProps<T extends object> = {
  placeholder?: string;
  spanCol?: number;
  disabled?: boolean;
  classNameInput?: string;
  classNameForm?: string;
  disabledBeforeDate?: boolean;
  beforeDate?: Dayjs;
  isYearOnly?: boolean;
  yearOnly?: string;
  defaultValue?: Dayjs;
} & FormItemProps<T>;

export const CustomDateInput = <T extends object>({
  label,
  name,
  rules,
  placeholder = '',
  disabled,
  classNameInput,
  spanCol,
  classNameForm,
  disabledBeforeDate = false,
  beforeDate = dayjs(),
  isYearOnly,
  yearOnly,
  defaultValue = dayjs(),
}: CustomDateInputProps<T>) => {
  const disabledDate = (current: Dayjs) => {
    if (isYearOnly) {
      return !dayjs(current).isSame(yearOnly, 'year');
    }
    return disabledBeforeDate ? (current ? current.isBefore(beforeDate, 'day') : false) : false;
  };

  return (
    <Form.Item<T>
      name={name as any}
      rules={rules}
      labelCol={{ span: 24 }}
      label={label}
      wrapperCol={{ span: spanCol }}
      className={classNameForm}
    >
      <DatePicker
        disabled={disabled}
        placeholder={placeholder}
        className={`h-[39px] w-full ${classNameInput}`}
        disabledDate={disabledDate}
        defaultValue={defaultValue}
      />
    </Form.Item>
  );
};
