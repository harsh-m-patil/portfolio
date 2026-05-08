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
  return (
    <Card className="group grid grid-cols-4 gap-2 rounded-md border p-0 transition-[transform,border-color,box-shadow] duration-200 ease-[var(--ease-out)] supports-[hover:hover]:hover:-translate-y-0.5 supports-[hover:hover]:hover:shadow-md">
      <div className="col-span-4 sm:col-span-1">
        {blog.imageUrl && (
          <Link href={url} className="block h-full overflow-hidden rounded-l-md">
            <Image
              src={blog.imageUrl}
              height="400"
              width="400"
              alt={blog.title}
              className="h-full w-full rounded-l-md object-cover transition-transform duration-300 ease-[var(--ease-out)] supports-[hover:hover]:group-hover:scale-[1.02]"
            />
          </Link>
        )}
      </div>
      <div className="text-muted-foreground py-3 px-2 col-span-4 sm:col-span-3">
        <p className="text-xl text-foreground">{blog.title}</p>
        <p className="mt-2 text-muted-foreground">{blog.description}</p>
        <div className="flex w-full justify-end px-4 py-3">
          <Link
            href={url}
            className="underline tracking-widest transition-[color,opacity] duration-150 ease-[var(--ease-out)] supports-[hover:hover]:hover:text-foreground"
          >
            Read article
          </Link>
        </div>
      </div>
    </Card>
  );
}
