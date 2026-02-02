import type { SVGProps } from "react";

type OpencodeIconProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

export function OpencodeIcon({ title, ...props }: OpencodeIconProps) {
  return (
    <svg
      width={32}
      height={40}
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g clipPath="url(#clip0_1311_94973)">
        <path d="M24 32H8V16H24V32Z" fill="#4B4646" />
        <path d="M24 8H8V32H24V8ZM32 40H0V0H32V40Z" fill="#F1ECEC" />
      </g>
      <defs>
        <clipPath id="clip0_1311_94973">
          <rect width={32} height={40} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
