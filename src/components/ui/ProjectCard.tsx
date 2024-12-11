"use client";
import Image from "next/image";
import { PinContainer } from "../ui/3d-pin";

export function ProjectCard({
  title,
  link,
  tech,
  description,
  image,
}: {
  title: string;
  link: string;
  tech: string[];
  description: string;
  image: string;
}) {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer title={link} href={link}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          <Image
            src={image}
            alt={title}
            width="500"
            height="500"
            className="rounded-3xl"
          />
          <span className="text-slate-500">{description}</span>
          <div className="mt-4">
            <ul className="text-slate-400 text-sm flex flex-wrap gap-x-5  items-center gap-y-2">
              {tech.map((item, index) => (
                <li
                  className="rounded-3xl border px-2 py-1 bg-gray-900"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/*<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />*/}
        </div>
      </PinContainer>
    </div>
  );
}
