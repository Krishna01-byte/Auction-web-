import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '../ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import { MOCK_AUCTIONS } from '@/data';

const HeroSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 6000);
        return () => clearInterval(interval);
    }, [emblaApi]);

    // Show mainly Upcoming or Live auctions
    const slides = MOCK_AUCTIONS.filter(a => a.status !== 'Closed').slice(0, 5);

    return (
        <section className="relative overflow-hidden bg-black text-white h-[80vh] min-h-[600px]">
            <div className="absolute inset-0 z-10 bg-black/30 pointer-events-none" />

            <div className="embla h-full" ref={emblaRef}>
                <div className="embla__container h-full flex">
                    {slides.map((slide) => (
                        <div key={slide.id} className="embla__slide flex-[0_0_100%] min-w-0 relative h-full">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            <div className="absolute inset-0 container flex flex-col justify-end pb-24 z-20">
                                <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                    <p className="text-accent font-medium tracking-widest uppercase text-sm flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                        {slide.status} Auction • {new Date(slide.endDate).toLocaleDateString()}
                                    </p>
                                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg text-white/80 max-w-xl italic">
                                        {slide.description}
                                    </p>
                                    <div className="pt-4">
                                        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8 h-12 rounded-none font-semibold">
                                            <Link to={`/auctions/${slide.id}`}>
                                                View Catalog <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-4 items-center">
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-transparent border-white/30 text-white hover:bg-white/20 hover:text-white hover:border-white"
                        onClick={scrollPrev}
                        aria-label="Previous slide"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-transparent border-white/30 text-white hover:bg-white/20 hover:text-white hover:border-white"
                        onClick={scrollNext}
                        aria-label="Next slide"
                    >
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
