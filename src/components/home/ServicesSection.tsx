import { SERVICES } from "@/data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
    return (
        <section className="bg-primary text-white py-24">
            <div className="container">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Exceptional Services</h2>
                    <p className="text-white/70 text-lg">
                        Beyond auctions, we offer a full suite of services for collectors, investors, and institutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.slice(0, 3).map((service) => (
                        <div key={service.id} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="text-4xl mb-6">{service.icon}</div>
                            <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                            <p className="text-white/60 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link to="/services" className="inline-flex items-center text-sm font-medium text-accent hover:text-white transition-colors">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
