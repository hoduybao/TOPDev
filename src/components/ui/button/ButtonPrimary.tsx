import { Button, ButtonProps } from 'antd';

type ButtonPrimaryProps = Omit<ButtonProps, 'icon'> & {
  icon?: string | React.ReactNode;
};

export default function ButtonPrimary({ title, icon, ...rest }: ButtonPrimaryProps) {
  return (
    <Button
      {...rest}
      type='primary'
      icon={typeof icon === 'string' ? <img src={icon} alt='roster' /> : icon}
      className='border-0 flex items-center bg-primary-900'
    >
      {title}
    </Button>
  );
}
