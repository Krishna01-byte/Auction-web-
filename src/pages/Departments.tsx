import { DEPARTMENTS } from "@/data";
import { Link } from "react-router-dom";

const Departments = () => {
    return (
        <div className="container py-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Specialist Departments</h1>
                <p className="text-muted-foreground text-lg">
                    Discover our curated categories, each led by world-class experts dedicated to the finest art and antiques.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DEPARTMENTS.map((dept) => (
                    <Link
                        to={`/auctions?department=${dept.name}`}
                        key={dept.slug}
                        className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all border border-stone-100"
                    >
                        <div className="aspect-[16/10] overflow-hidden bg-muted">
                            <img
                                src={dept.image}
                                alt={dept.name}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </div>
                        <div className="p-6">
                            <div className="text-3xl mb-3">{dept.icon}</div>
                            <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                {dept.name}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                {dept.description}
                            </p>
                            <span className="text-xs font-medium text-accent uppercase tracking-wider">
                                View {dept.lotCount} Lots &rarr;
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Departments;
