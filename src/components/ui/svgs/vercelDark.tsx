"use client";
import type { SVGProps } from "react";

const Vercel = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} viewBox="0 0 256 222" preserveAspectRatio="xMidYMid">
      <title>Vercel </title>
      <path className="dark:bg-white bg-black" d="m128 0 128 221.705H0z" />
    </svg>
  );
};

export { Vercel };
