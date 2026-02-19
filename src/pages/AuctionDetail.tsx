import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, ShieldCheck, Truck, Gavel } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState, useEffect } from "react";
import { Badge } from "../components/ui/badge";
import { MOCK_LOTS, MOCK_AUCTIONS } from "@/data";

// Helper for countdown
const calculateTimeLeft = (endDate: string) => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }
    return timeLeft;
};

const AuctionDetail = () => {
    const { id } = useParams();
    // In a real app, fetch from API. Here we find in mock data.
    const lot = MOCK_LOTS.find((l) => l.id === id);
    const auction = lot ? MOCK_AUCTIONS.find(a => a.id === lot.auctionId) : null;

    // Bidding State
    const [currentBid, setCurrentBid] = useState(lot?.price || 0);
    const [bidInput, setBidInput] = useState("");
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    // Countdown State
    const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft(auction?.endDate || ""));

    useEffect(() => {
        if (!auction) return;
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(auction.endDate));
        }, 1000);
        return () => clearInterval(timer);
    }, [auction]);

    if (!lot || !auction) {
        return <div className="container py-20 text-center">Item not found</div>;
    }

    const handleBid = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccessMsg("");

        const bidAmount = Number(bidInput);

        if (!bidAmount || isNaN(bidAmount)) {
            setError("Please enter a valid amount.");
            return;
        }

        if (bidAmount <= currentBid) {
            setError(`Bid must be higher than current bid of ₹${currentBid.toLocaleString()}`);
            return;
        }

        // Valid bid
        setCurrentBid(bidAmount);
        setBidInput("");
        setSuccessMsg(`Bid of ₹${bidAmount.toLocaleString()} placed successfully!`);

        // In full stack, this would call API
        // placeBid({ lotId: lot.id, amount: bidAmount });
    };

    return (
        <div className="container py-12">
            <Link to="/auctions" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Auctions
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="space-y-4">
                    <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted relative">
                        <img
                            src={lot.image}
                            alt={lot.title}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-primary">
                                Lot #{lot.id.replace(/\D/g, '')}
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-primary">{lot.title}</h1>
                        <p className="text-xl text-accent font-medium">{lot.artist}</p>
                        <div className="flex items-center gap-2 mt-4 text-sm">
                            <span className="bg-black/5 px-2 py-1 rounded text-muted-foreground">{lot.category}</span>
                            {lot.medium && <span className="bg-black/5 px-2 py-1 rounded text-muted-foreground">{lot.medium}</span>}
                            {lot.year && <span className="bg-black/5 px-2 py-1 rounded text-muted-foreground">{lot.year}</span>}
                        </div>
                    </div>

                    <div className="p-8 bg-white rounded-xl border border-stone-200 shadow-sm space-y-6">
                        <div className="flex justify-between items-end border-b border-stone-100 pb-6">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Current Bid</p>
                                <p className="text-4xl font-serif font-bold text-primary">₹{currentBid.toLocaleString()}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-muted-foreground mb-1">Time Remaining</p>
                                <div className="flex items-center text-accent font-mono font-bold text-lg">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {timeLeft.days !== undefined ? (
                                        <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
                                    ) : (
                                        <span>Auction Closed</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Bidding Form */}
                        {auction.status === 'Live' || auction.status === 'Upcoming' ? (
                            <form onSubmit={handleBid} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="bidAmount" className="sr-only">Bid Amount</Label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                                        <Input
                                            id="bidAmount"
                                            type="number"
                                            placeholder={`Enter higher than ${currentBid}`}
                                            className={`pl-8 h-12 text-lg ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                                            value={bidInput}
                                            onChange={(e) => setBidInput(e.target.value)}
                                        />
                                    </div>
                                    {error && <p className="text-sm text-red-500">{error}</p>}
                                    {successMsg && <p className="text-sm text-green-600 font-medium">{successMsg}</p>}
                                </div>
                                <Button type="submit" className="w-full h-12 text-lg bg-accent hover:bg-accent/90 text-white">
                                    Place Bid <Gavel className="ml-2 w-4 h-4" />
                                </Button>
                                <p className="text-xs text-center text-muted-foreground">
                                    By placing a bid, you agree to our Terms and Conditions. Buyer's Premium applies.
                                </p>
                            </form>
                        ) : (
                            <div className="bg-muted/30 p-4 rounded text-center text-muted-foreground">
                                Bidding for this item has ended.
                            </div>
                        )}

                    </div>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-accent/10 rounded-full text-accent">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Authenticity Guaranteed</h4>
                                <p className="text-sm text-muted-foreground">Verified by TrueBid experts. Full provenance documentation included.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-accent/10 rounded-full text-accent">
                                <Truck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Insured Shipping</h4>
                                <p className="text-sm text-muted-foreground">Global insured shipping available. Professional packaging for fragile items.</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-stone-200 pt-8">
                        <h3 className="text-xl font-serif font-bold mb-4">Description</h3>
                        <div className="prose prose-stone text-muted-foreground">
                            <p>{lot.description || "No description available for this lot."}</p>
                            <p className="mt-4">
                                <strong>Auction Event:</strong> {auction.title} <br />
                                <strong>End Date:</strong> {new Date(auction.endDate).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionDetail;
