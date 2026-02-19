import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, ShieldCheck, Truck } from "lucide-react";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useAuctionStore } from "@/hooks/useAuctionStore";
import { useState } from "react";
import { Badge } from "../components/ui/badge";

const ItemDetail = () => {
    const { id } = useParams();
    const lots = useAuctionStore((state) => state.lots);
    const placeBid = useAuctionStore((state) => state.placeBid);
    const auctions = useAuctionStore((state) => state.auctions);

    const lot = lots.find((l) => l.id === id);
    // Find parent auction for additional details like end date
    const auction = lot ? auctions.find(a => a.id === lot.auctionId) : null;

    const [bidAmount, setBidAmount] = useState<string>("");
    const [open, setOpen] = useState(false);

    if (!lot || !auction) {
        return <div className="container py-20 text-center">Item not found</div>;
    }

    const minBid = lot.price + 500;

    const handleBid = () => {
        const amount = Number(bidAmount);
        if (amount >= minBid) {
            placeBid(lot.id, amount);
            setOpen(false);
            setBidAmount("");
            // In a real app, you'd show a success toast here
        }
    };

    return (
        <div className="container py-12">
            <Link to="/auctions" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Auctions
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                        <img
                            src={lot.image}
                            alt={lot.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="aspect-square rounded-lg bg-muted overflow-hidden cursor-pointer hover:ring-2 hover:ring-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                                role="button"
                                tabIndex={0}
                                aria-label={`View image ${i + 1}`}
                            // In a real app, you'd implement the click handler to change the main image
                            // onClick={() => setActiveImage(i)}
                            // onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveImage(i) }}
                            >
                                <img
                                    src={lot.image}
                                    alt={`View ${i + 1}`}
                                    className="h-full w-full object-cover opacity-80 hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Item Details */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{lot.title}</h1>
                        <p className="text-xl text-muted-foreground">{lot.artist}</p>
                        <div className="flex items-center gap-2 mt-4 text-sm">
                            <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">{auction.status} Auction</Badge>
                            <span className="text-muted-foreground">Lot #{lot.id.replace(/\D/g, '')}</span>
                        </div>
                    </div>

                    <div className="p-6 bg-muted/30 rounded-xl border space-y-6">
                        <div className="flex justify-between items-end border-b pb-6">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Current Bid ({lot.bids || 0} bids)</p>
                                <p className="text-3xl font-bold">${lot.price.toLocaleString()}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-muted-foreground mb-1">Ends In</p>
                                <div className="flex items-center text-accent font-semibold">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {new Date(auction.endDate).toLocaleDateString()}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <Dialog open={open} onOpenChange={setOpen}>
                                    <DialogTrigger asChild>
                                        <Button className="flex-1 h-12 text-lg">Place Bid</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-md">
                                        <DialogHeader>
                                            <DialogTitle>Place a Bid</DialogTitle>
                                            <DialogDescription>
                                                Current bid is <strong>${lot.price.toLocaleString()}</strong>. Next minimum bid is <strong>${minBid.toLocaleString()}</strong>.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid w-full gap-1.5">
                                                <Label htmlFor="bid-amount">Your Bid Amount</Label>
                                                <Input
                                                    id="bid-amount"
                                                    type="number"
                                                    placeholder={minBid.toString()}
                                                    min={minBid}
                                                    value={bidAmount}
                                                    onChange={(e) => setBidAmount(e.target.value)}
                                                />
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                By placing this bid, you agree to the Terms and Conditions and Buyer's Premium.
                                            </p>
                                        </div>
                                        <DialogFooter className="sm:justify-start">
                                            <Button type="button" className="w-full" onClick={handleBid}>Confirm Bid</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                                <Button variant="outline" className="h-12 w-12 p-0">
                                    <span className="sr-only">Wishlist</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-5 w-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                </Button>
                            </div>
                            <p className="text-xs text-center text-muted-foreground">
                                Minimum bid increment: $500. Buyer's premium applies.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                            <div>
                                <h4 className="font-semibold mb-1">Authenticity Guarantee</h4>
                                <p className="text-sm text-muted-foreground">Every item is verified by our team of expert appraisers.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Truck className="w-6 h-6 text-accent shrink-0" />
                            <div>
                                <h4 className="font-semibold mb-1">Global Shipping</h4>
                                <p className="text-sm text-muted-foreground">Insured and tracked shipping available to over 100 countries.</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-8">
                        <h3 className="text-xl font-serif font-bold mb-4">Description</h3>
                        <div className="prose prose-stone text-muted-foreground">
                            <p>
                                A stunning example of {lot.artist}'s work.
                                This piece showcases the distinctive style and mastery of the medium that defines the artist's oeuvre.
                                Provenance: Private Collection.
                            </p>
                            <p className="mt-4">
                                Condition: Excellent. Minor restoration visible under UV light consistent with age. Original frame included.
                            </p>
                            <p className="mt-4 text-sm">
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

export default ItemDetail;
