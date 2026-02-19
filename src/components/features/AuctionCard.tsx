import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { cn } from "@/utils";
import { type Lot, MOCK_AUCTIONS } from "@/data";

interface AuctionCardProps extends Lot {
    className?: string;
}

export function AuctionCard({ id, title, artist, price, image, bids, auctionId, className }: AuctionCardProps) {
    const auction = MOCK_AUCTIONS.find(a => a.id === auctionId);
    const endsAt = auction ? auction.endDate : new Date().toISOString();

    return (
        <Card className={cn("group overflow-hidden rounded-xl border-0 bg-transparent shadow-none transition-all hover:shadow-lg", className)}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white"
                    aria-label="Add to Wishlist"
                >
                    <Heart className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between rounded-lg bg-black/60 p-3 backdrop-blur-md text-white">
                    <div>
                        <p className="text-xs text-white/70">Current Bid</p>
                        <p className="font-semibold">${price.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-white/70">Ends In</p>
                        <p className="font-semibold text-accent">{new Date(endsAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
            <CardContent className="p-4 pt-4">
                <p className="text-sm text-muted-foreground">{artist}</p>
                <Link to={`/auctions/${id}`} className="block">
                    <h3 className="font-serif text-lg font-medium leading-tight group-hover:underline">{title}</h3>
                </Link>
            </CardContent>
            <CardFooter className="p-4 pt-0 text-xs text-muted-foreground flex justify-between">
                <span>{bids || 0} bids</span>
                <Link to={`/auctions/${id}`} className="hover:text-foreground">View Details &rarr;</Link>
            </CardFooter>
        </Card>
    );
}

