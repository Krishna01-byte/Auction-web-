import { SERVICES } from "@/data";
import { Button } from "@/components/ui/button";

const Services = () => {
    return (
        <div className="pb-20">
            {/* Hero */}
            <div className="bg-primary text-white py-24">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Comprehensive solutions for collectors, buyers, and sellers. Experience the TrueBid standard of excellence.
                    </p>
                </div>
            </div>

            <div className="container max-w-5xl -mt-12 relative z-10 space-y-12">
                {SERVICES.map((service) => (
                    <div key={service.id} className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-stone-100 flex flex-col md:flex-row gap-8 items-start">
                        <div className="bg-accent/10 p-6 rounded-xl flex items-center justify-center shrink-0">
                            <span className="text-5xl">{service.icon}</span>
                        </div>
                        <div className="flex-1 space-y-4">
                            <h2 className="text-2xl font-serif font-bold text-primary">{service.title}</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                {service.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-stone-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 shrink-0" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                                    Enquire Now
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="container mt-24 text-center">
                <h2 className="text-2xl font-serif font-bold mb-6">Ready to get started?</h2>
                <Button size="lg" className="bg-primary text-white">Contact Our Team</Button>
            </div>
        </div>
    );
};

export default Services;
