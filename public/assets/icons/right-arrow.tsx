import { SVGProps } from 'react';

export default function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
      {...props}
    >
      <path
        d='M9 18L15 12L9 6'
        stroke='#000000'
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
