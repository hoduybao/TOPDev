import { SVGProps } from 'react';

export default function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='22'
      viewBox='0 0 21 22'
      fill='none'
      className={props.className}
      {...props}
    >
      <path d='M17 7.5L10.5 14.5L4 7.5' />
    </svg>
  );
}
