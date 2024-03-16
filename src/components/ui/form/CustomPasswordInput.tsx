import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import React, { useState } from 'react';
import './CustomPasswordInput.scss';

export type CustomPasswordInputProps = {
  label?: React.ReactNode;
  name?: string;
  rules?: Array<Record<string, any>>;
  labelCol?: number;
  wrapperCol?: number;
  disabled?: boolean;
  classNameInput?: string;
};

const CustomPasswordInput: React.FC<CustomPasswordInputProps> = ({
  label,
  name,
  rules,
  disabled,
  classNameInput,
  labelCol = 24,
  wrapperCol = 24,
}: CustomPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Form.Item
      name={name}
      rules={rules}
      label={label}
      labelCol={{ span: labelCol }}
      wrapperCol={{ span: wrapperCol }}
    >
      <Input.Password
        className={classNameInput}
        disabled={disabled}
        iconRender={(visible) =>
          visible ? (
            <EyeTwoTone onClick={togglePasswordVisibility} />
          ) : (
            <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
          )
        }
        suffix={<LockOutlined className='site-form-item-icon' />}
        visibilityToggle
      />
    </Form.Item>
  );
};

export default CustomPasswordInput;
