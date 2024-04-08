import { SVGProps } from 'react';

export default function FollowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      aria-hidden='true'
      height='24'
      width='24'
      className={props.className}
      {...props}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
      ></path>
    </svg>
  );
}
