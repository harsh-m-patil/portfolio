"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";

type BlogCardProps = {
  blog: {
    title: string;
    description?: string | undefined;
    imageUrl?: string | undefined;
  };
  url: string;
};

export function BlogCard({ blog, url }: BlogCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.3 }}
      whileHover={
        reduceMotion ? undefined : { y: -4, boxShadow: "var(--shadow-lg)" }
      }
      transition={{ duration: 0.35 }}
    >
      <Card className="grid grid-cols-4 gap-2 border rounded-md p-0">
        <div className="col-span-4 sm:col-span-1">
          {blog.imageUrl && (
            <Link href={url}>
              <Image
                src={blog.imageUrl}
                height="200"
                width="400"
                alt={blog.title}
                priority
                className="w-full rounded-l-md h-full object-cover"
              />
            </Link>
          )}
        </div>
        <div className="text-muted-foreground py-3 px-2 col-span-4 sm:col-span-3">
          <p className="text-xl text-foreground">{blog.title}</p>
          <p className="mt-2 text-muted-foreground">{blog.description}</p>
          <div className="flex w-full justify-end px-4 py-3">
            <Link href={url} className="underline tracking-widest">
              {"<ReadBlog/>"}
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
