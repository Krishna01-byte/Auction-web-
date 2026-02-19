import { create } from 'zustand';
import { MOCK_LOTS, MOCK_AUCTIONS, type Lot, type Auction } from '@/data';

interface AuctionState {
    lots: Lot[];
    auctions: Auction[];
    searchQuery: string;
    activeCategory: string | null;
    minPrice: number | null;
    maxPrice: number | null;
    sortBy: string;

    // Actions
    setSearchQuery: (query: string) => void;
    setCategory: (category: string | null) => void;
    setPriceRange: (min: number | null, max: number | null) => void;
    setSortBy: (sort: string) => void;
    placeBid: (lotId: string, amount: number) => void;
    getFilteredLots: () => Lot[];
}

export const useAuctionStore = create<AuctionState>((set, get) => ({
    lots: MOCK_LOTS,
    auctions: MOCK_AUCTIONS,
    searchQuery: '',
    activeCategory: null,
    minPrice: null,
    maxPrice: null,
    sortBy: 'Ending Soon',

    setSearchQuery: (query) => set({ searchQuery: query }),
    setCategory: (category) => set({ activeCategory: category }),
    setPriceRange: (min, max) => set({ minPrice: min, maxPrice: max }),
    setSortBy: (sort) => set({ sortBy: sort }),

    placeBid: (lotId, amount) => set((state) => ({
        lots: state.lots.map((lot) =>
            lot.id === lotId
                ? { ...lot, price: amount, bids: (lot.bids || 0) + 1 }
                : lot
        )
    })),

    getFilteredLots: () => {
        const { lots, auctions, searchQuery, activeCategory, minPrice, maxPrice, sortBy } = get();

        let result = lots.filter((lot) => {
            // Join with Auction to get category and end time
            const auction = auctions.find(a => a.id === lot.auctionId);
            if (!auction) return false;

            const matchesSearch = lot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                lot.artist.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = activeCategory ? auction.category === activeCategory : true;
            const matchesMinPrice = minPrice ? lot.price >= minPrice : true;
            const matchesMaxPrice = maxPrice ? lot.price <= maxPrice : true;

            const isOpen = auction.status === 'Live' || auction.status === 'Upcoming';

            return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice && isOpen;
        });

        // Sorting logic
        if (sortBy === 'Price: Low to High') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'Price: High to Low') {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'Most Bids') {
            result.sort((a, b) => (b.bids || 0) - (a.bids || 0));
        } else {
            // Ending Soon (Default) - based on parent auction end date
            result.sort((a, b) => {
                const auctionA = auctions.find(auc => auc.id === a.auctionId);
                const auctionB = auctions.find(auc => auc.id === b.auctionId);
                if (!auctionA || !auctionB) return 0;
                return new Date(auctionA.endDate).getTime() - new Date(auctionB.endDate).getTime();
            });
        }

        return result;
    }
}));
