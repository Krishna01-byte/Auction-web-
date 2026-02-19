import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AuctionCard } from "../features/AuctionCard";
import { MOCK_LOTS, MOCK_AUCTIONS } from "@/data";
import { Button } from "../ui/button";

const AuctionsOnTheWay = () => {
    // Find upcoming auctions and get a few representative lots from them
    const upcomingAuctions = MOCK_AUCTIONS.filter(a => a.status === 'Upcoming');
    const upcomingAuctionIds = upcomingAuctions.map(a => a.id);

    // Get lots that belong to upcoming auctions
    const featuredLots = MOCK_LOTS
        .filter(lot => upcomingAuctionIds.includes(lot.auctionId))
        .slice(0, 4);

    return (
        <section className="container py-20">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-primary">Auctions On The Way</h2>
                    <p className="text-muted-foreground mt-2">Discover upcoming sales and curate your collection.</p>
                </div>
                <Link to="/auctions?status=upcoming" className="hidden md:flex items-center text-sm font-medium text-accent hover:underline">
                    View all upcoming <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredLots.map((lot) => (
                    <AuctionCard key={lot.id} {...lot} />
                ))}
            </div>

            <div className="mt-8 flex justify-center md:hidden">
                <Button variant="outline" asChild>
                    <Link to="/auctions?status=upcoming">View all</Link>
                </Button>
            </div>
        </section>
    );
};

export default AuctionsOnTheWay;
