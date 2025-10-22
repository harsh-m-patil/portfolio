import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";
import { ExternalLink } from "lucide-react";
import { IconExternalLink } from "@tabler/icons-react";

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
  );
}
