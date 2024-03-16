import { Button, ButtonProps } from 'antd';

export default function ButtonBig({ children, className, ...rest }: ButtonProps) {
  return (
    <Button type='primary' className={`h-[54px] p-[15px] ${className}`} {...rest}>
      {children}
    </Button>
  );
}
