import { BlogCard } from "@/components/custom/blog-card";
import { source as blog } from "@/lib/source";
export default function BlogsPage() {
  const posts = blog.getPages();

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold font-doto">Blogs</h1>
        <p className="text-muted-foreground">
          Which I did'nt write using chatgpt
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <BlogCard key={post.url} blog={post.data} url={post.url} />
        ))}
      </div>
    </main>
  );
}
