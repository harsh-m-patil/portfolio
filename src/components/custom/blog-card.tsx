import Image from "next/image";
import Link from "next/link";

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
    <div className="flex gap-2 flex-col sm:flex-row border rounded-md">
      <div>
        {blog.imageUrl && (
          <Link href={url}>
            <Image
              src={blog.imageUrl}
              height="200"
              width="400"
              alt={blog.title}
              className="w-full rounded-l-md"
            />
          </Link>
        )}
      </div>
      <div className="text-muted-foreground py-3 px-2">
        <p className="text-xl text-foreground">{blog.title}</p>
        <p className="mt-2 text-muted-foreground">{blog.description}</p>
      </div>
    </div>
  );
}
