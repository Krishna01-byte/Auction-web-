import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MOCK_BLOGS } from "@/data";

const BlogSection = () => {
    return (
        <section className="container">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-serif font-bold">Stories & Insights</h2>
                    <p className="text-muted-foreground mt-2">Expert guides, market news, and collector spotlights.</p>
                </div>
                <Link to="/blog" className="hidden md:flex items-center text-sm font-medium hover:underline">
                    Read Journal <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {MOCK_BLOGS.map((post) => (
                    <article key={post.id} className="group cursor-pointer">
                        <div className="aspect-[3/2] overflow-hidden rounded-xl bg-muted mb-4">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-2">
                            {post.category && (
                                <span className="text-xs font-medium text-accent uppercase tracking-wider">{post.category}</span>
                            )}
                            <h3 className="text-xl font-serif font-bold group-hover:underline leading-tight">
                                {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2">
                                {post.excerpt}
                            </p>
                            <p className="text-xs text-muted-foreground pt-2">{post.date}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
