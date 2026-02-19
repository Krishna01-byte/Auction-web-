import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { AuctionCard } from '../features/AuctionCard';
import { MOCK_LOTS } from '@/data';

const RecentAuctions = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false, slidesToScroll: 2 });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // Mock "Recent" Lots - maybe sold ones
    const recentLots = MOCK_LOTS.filter(l => l.soldDate).slice(0, 6);

    return (
        <section className="container overflow-hidden">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-serif font-bold">Recent Results</h2>
                    <p className="text-muted-foreground mt-2">Highlights from past auctions.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-6 py-4">
                        {recentLots.map((lot) => (
                            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] min-w-0 pl-6" key={lot.id}>
                                <AuctionCard {...lot} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <Button variant="link" className="text-muted-foreground">View All Past Results &rarr;</Button>
            </div>
        </section>
    );
};

export default RecentAuctions;
