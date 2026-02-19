import { Search, SlidersHorizontal } from "lucide-react";
import { AuctionCard } from "@/components/features/AuctionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CATEGORIES } from "@/data";
import { useAuctionStore } from "@/hooks/useAuctionStore";
import { useState } from "react";

const Listing = () => {
    const { searchQuery, setSearchQuery, setCategory, setPriceRange, sortBy, setSortBy } = useAuctionStore();
    const [min, setMin] = useState<number | "">("");
    const [max, setMax] = useState<number | "">("");

    // Local state for active filters visualization (optional, but good for UI)
    const [activeCat, setActiveCat] = useState<string | null>(null);

    const filteredLots = useAuctionStore((state) => state.getFilteredLots());

    const handleCategoryChange = (categoryName: string) => {
        if (activeCat === categoryName) {
            setActiveCat(null);
            setCategory(null);
        } else {
            setActiveCat(categoryName);
            setCategory(categoryName);
        }
    };

    const applyPriceFilter = () => {
        setPriceRange(min === "" ? null : Number(min), max === "" ? null : Number(max));
    };

    return (
        <div className="container py-12">
            <div className="flex flex-col md:flex-row gap-8">

                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 space-y-8">
                    <div>
                        <h3 className="font-serif font-bold text-xl mb-4">Search</h3>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search items..."
                                className="pl-9"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Search items"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-xl mb-4">Categories</h3>
                        <div className="space-y-3">
                            {CATEGORIES.map((category) => {
                                const isActive = activeCat === category.name;
                                return (
                                    <div
                                        key={category.name}
                                        className={`flex items-center justify-between group cursor-pointer p-2 rounded-md transition-colors ${isActive ? 'bg-secondary text-foreground font-medium' : 'hover:bg-muted text-muted-foreground'}`}
                                        onClick={() => handleCategoryChange(category.name)}
                                    >
                                        <div className="flex items-center gap-3">
                                            {/* We could add icons here if we had them in the data */}
                                            <span className="text-sm">{category.name}</span>
                                        </div>
                                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-xl mb-4">Price Range</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <Input
                                type="number"
                                placeholder="Min"
                                value={min}
                                onChange={(e) => setMin(e.target.value ? Number(e.target.value) : "")}
                                aria-label="Minimum Price"
                            />
                            <Input
                                type="number"
                                placeholder="Max"
                                value={max}
                                onChange={(e) => setMax(e.target.value ? Number(e.target.value) : "")}
                                aria-label="Maximum Price"
                            />
                        </div>
                        <Button className="w-full mt-2" onClick={applyPriceFilter}>Apply</Button>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-serif font-bold">Live Auctions</h1>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground hidden sm:inline-block">Sort by:</span>
                            <select
                                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                aria-label="Sort items"
                            >
                                <option>Ending Soon</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Most Bids</option>
                            </select>
                            <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle filters">
                                <SlidersHorizontal className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {filteredLots.length === 0 ? (
                        <div className="text-center py-20 text-muted-foreground">
                            No items found matching your filters.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredLots.map((lot) => (
                                <AuctionCard key={lot.id} {...lot} />
                            ))}
                        </div>
                    )}

                    {filteredLots.length > 0 && (
                        <div className="mt-12 flex justify-center">
                            <Button variant="outline" className="w-full sm:w-auto">Load More</Button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Listing;
