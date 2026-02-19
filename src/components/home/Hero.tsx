import { Button } from "../ui/button";

const Hero = () => {
    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=2670&auto=format&fit=crop"
                    alt="Luxury Auction Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="container relative z-10 flex flex-col items-center text-center text-white space-y-8 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-5">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight max-w-4xl">
                    Discover Extraordinary <br />
                    <span className="text-accent italic">Treasures</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl font-light">
                    Bid on exclusive art, jewelry, and collectibles from the world's most prestigious auctions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold px-8">
                        Start Bidding
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                        Sell with Us
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 animate-bounce">
                <div className="h-10 w-6 rounded-full border-2 border-white/50 flex justify-center p-1">
                    <div className="h-2 w-1 bg-white rounded-full animate-scroll" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
