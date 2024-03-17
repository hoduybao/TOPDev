import { OptionItems } from '@/+core/utilities/types/option.type';
import { Form, Select } from 'antd';
import React from 'react';

export type CustomMultiSelectInputProps<T> = {
  label?: React.ReactNode;
  selectConfigs: Array<{
    name: keyof T | (keyof T | number)[];
    rules?: Array<Record<string, any>>;
    options?: OptionItems;
    showSearch?: boolean;
    defaultValue?: any;
    value?: any;
    onChange?: (value: any) => void;
  }>;
  labelCol?: number;
  wrapperCol?: number;
  disabled?: boolean;
  classNameSelect?: string;
  classNameForm?: string;
};

const CustomMultiSelectInput = <T extends object>({
  label,
  selectConfigs,
  disabled,
  classNameSelect,
  classNameForm,
  labelCol = 24,
}: CustomMultiSelectInputProps<T>) => {
  return (
    <Form.Item label={label} className={classNameForm} labelCol={{ span: labelCol }}>
      {selectConfigs.map((selectConfig, index) => (
        <Select
          key={index}
          className={`h-[39px] ${classNameSelect}`}
          onChange={selectConfig.onChange}
          disabled={disabled}
          options={selectConfig.options}
          defaultValue={selectConfig.defaultValue}
          showSearch={selectConfig.showSearch ?? true}
          value={selectConfig.value}
        />
      ))}
    </Form.Item>
  );
};

export default CustomMultiSelectInput;
