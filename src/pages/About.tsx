import { Users, History, Trophy } from "lucide-react";

const About = () => {
    return (
        <div className="pb-20">
            {/* Hero */}
            <div className="bg-black text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2576&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About TrueBid</h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        Connecting passionate collectors with extraordinary treasures since 2010.
                    </p>
                </div>
            </div>

            <div className="container py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-primary">Our Story</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                TrueBid was founded on a simple belief: that the thrill of the auction and the joy of collecting should be accessible, transparent, and secure for everyone, everywhere.
                            </p>
                            <p>
                                What started as a small boutique auction house for Indian miniatures has grown into a premier global destination for fine art, antiques, and luxury collectibles. We combine centuries-old traditions of auctioneering with cutting-edge technology to create a seamless marketplace.
                            </p>
                            <p>
                                Our team of dedicated specialists rigorously vets every item, ensuring that when you bid on TrueBid, you bid with absolute confidence.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-muted rounded-xl bg-[url('https://images.unsplash.com/photo-1579783902614-a3fb39279c0f?q=80&w=2072&auto=format&fit=crop')] bg-cover" />
                        <div className="aspect-square bg-muted rounded-xl bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop')] bg-cover translate-y-8" />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
                    <div className="text-center space-y-2">
                        <Users className="w-8 h-8 mx-auto text-accent" />
                        <h3 className="text-3xl font-bold">50k+</h3>
                        <p className="text-sm text-muted-foreground">Active Collectors</p>
                    </div>
                    <div className="text-center space-y-2">
                        <GavelIcon className="w-8 h-8 mx-auto text-accent" />
                        <h3 className="text-3xl font-bold">120+</h3>
                        <p className="text-sm text-muted-foreground">Auctions Annually</p>
                    </div>
                    <div className="text-center space-y-2">
                        <History className="w-8 h-8 mx-auto text-accent" />
                        <h3 className="text-3xl font-bold">15+</h3>
                        <p className="text-sm text-muted-foreground">Years Experience</p>
                    </div>
                    <div className="text-center space-y-2">
                        <Trophy className="w-8 h-8 mx-auto text-accent" />
                        <h3 className="text-3xl font-bold">₹500Cr+</h3>
                        <p className="text-sm text-muted-foreground">Assets Sold</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const GavelIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" /><path d="m16 16 6-6" /><path d="m8 8 6-6" /><path d="m9 7 8 8" /><path d="m21 11-8-8" /></svg>
)

export default About;
