import { Search } from "lucide-react";
import { AuctionCard } from "@/components/features/AuctionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MOCK_LOTS, MOCK_AUCTIONS, CATEGORIES } from "@/data";
import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const Auctions = () => {
    const [searchParams] = useSearchParams();
    const statusFilter = searchParams.get('status');

    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filteredLots = useMemo(() => {
        let lots = MOCK_LOTS;

        // Filter by Status (via Auction)
        if (statusFilter) {
            const auctionIds = MOCK_AUCTIONS
                .filter(a => a.status.toLowerCase() === statusFilter.toLowerCase())
                .map(a => a.id);
            lots = lots.filter(lot => auctionIds.includes(lot.auctionId));
        }

        // Filter by Category
        if (activeCategory) {
            lots = lots.filter(lot => lot.category === activeCategory || MOCK_AUCTIONS.find(a => a.id === lot.auctionId)?.category === activeCategory);
        }

        // Filter by Search
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            lots = lots.filter(lot =>
                lot.title.toLowerCase().includes(lowerQuery) ||
                lot.artist.toLowerCase().includes(lowerQuery)
            );
        }

        return lots;
    }, [statusFilter, activeCategory, searchQuery]);

    const pageTitle = statusFilter
        ? `${statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)} Auctions`
        : "All Auctions";

    return (
        <div className="container py-12">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full md:w-64 space-y-8">
                    <div>
                        <h3 className="font-serif font-bold text-xl mb-4 text-primary">Search</h3>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search lots..."
                                className="pl-9 bg-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-xl mb-4 text-primary">Departments</h3>
                        <div className="space-y-2">
                            <div
                                className={`cursor-pointer p-2 rounded-md transition-colors text-sm ${!activeCategory ? 'bg-accent text-white font-medium' : 'hover:bg-muted text-muted-foreground'}`}
                                onClick={() => setActiveCategory(null)}
                            >
                                All Departments
                            </div>
                            {CATEGORIES.map((category) => (
                                <div
                                    key={category.name}
                                    className={`cursor-pointer p-2 rounded-md transition-colors text-sm ${activeCategory === category.name ? 'bg-accent text-white font-medium' : 'hover:bg-muted text-muted-foreground'}`}
                                    onClick={() => setActiveCategory(category.name)}
                                >
                                    {category.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-serif font-bold text-primary">{pageTitle}</h1>
                        <p className="text-muted-foreground text-sm">{filteredLots.length} results</p>
                    </div>

                    {filteredLots.length === 0 ? (
                        <div className="text-center py-20 bg-muted/20 rounded-xl">
                            <p className="text-muted-foreground text-lg">No items found matching your criteria.</p>
                            <Button
                                variant="link"
                                className="mt-2 text-accent"
                                onClick={() => { setSearchQuery(""); setActiveCategory(null); }}
                            >
                                Clear all filters
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredLots.map((lot) => (
                                <AuctionCard key={lot.id} {...lot} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Auctions;
