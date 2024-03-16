import { CheckCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

export type SuccessButtonProps = {
  onClick?: () => void;
  label?: string;
};

const SuccessButton: React.FC<SuccessButtonProps> = ({
  onClick,
  label = 'Success Button',
}: SuccessButtonProps) => {
  return (
    <Button type='primary' icon={<CheckCircleOutlined />} onClick={onClick}>
      {label}
    </Button>
  );
};

export default SuccessButton;
