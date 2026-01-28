import Link from "next/link";

const posts = [
  {
    title: "Understanding React Server Components",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    slug: "#",
    category: "React"
  },
  {
    title: "The Art of Minimalist Design",
    date: "Dec 10, 2023",
    readTime: "3 min read",
    slug: "#",
    category: "Design"
  },
  {
    title: "Optimizing Next.js Applications",
    date: "Nov 28, 2023",
    readTime: "8 min read",
    slug: "#",
    category: "Performance"
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white">Blog</h1>
        <p className="text-neutral-400">Thoughts on software development, design, and more.</p>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post, idx) => (
          <Link 
            key={idx} 
            href={post.slug}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 -mx-4 rounded-xl hover:bg-white/5 transition-colors"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{post.title}</h2>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-neutral-400 border border-white/5 whitespace-nowrap self-start sm:self-center">
                {post.category}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
