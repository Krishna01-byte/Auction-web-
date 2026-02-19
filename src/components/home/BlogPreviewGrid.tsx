import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MOCK_BLOGS } from "@/data";

const BlogPreviewGrid = () => {
    return (
        <section className="container py-20">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-primary">Latest from TrueBid</h2>
                    <p className="text-muted-foreground mt-2">Insights, guides, and stories from the world of art and antiques.</p>
                </div>
                <Link to="/blog" className="hidden md:flex items-center text-sm font-medium text-accent hover:underline">
                    Read our journal <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {MOCK_BLOGS.map((blog) => (
                    <article key={blog.id} className="group flex flex-col space-y-4">
                        <div className="aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                                <span className="text-accent">{blog.category}</span>
                                <span>•</span>
                                <span>{blog.date}</span>
                            </div>
                            <h3 className="font-serif text-xl font-bold leading-tight group-hover:text-accent transition-colors">
                                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                            </h3>
                            <p className="text-muted-foreground line-clamp-2">
                                {blog.excerpt}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default BlogPreviewGrid;
