export interface Auction {
    id: string;
    title: string;
    category: string;
    image: string;
    startDate: string;
    endDate: string;
    status: 'Upcoming' | 'Live' | 'Closed';
    description: string;
}

export interface Lot {
    id: string;
    auctionId: string;
    artist: string;
    title: string;
    image: string;
    price: number;
    category: string;
    medium?: string;
    year?: string;
    soldDate?: string;
    bids?: number;
    description?: string;
}

export interface Blog {
    id: string;
    title: string;
    image: string;
    excerpt: string;
    date: string;
    category?: string;
}

export interface Department {
    name: string;
    slug: string;
    description: string;
    image: string;
    lotCount: number;
    icon: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    details: string[];
    icon: string;
}

// ──────────────────────────────────────────────
// MOCK AUCTIONS — Arts & Antiques only
// ──────────────────────────────────────────────
export const MOCK_AUCTIONS: Auction[] = [
    {
        id: "a1",
        title: "Heritage Paintings Evening Sale",
        category: "Paintings",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb39279c0f?q=80&w=2072&auto=format&fit=crop",
        startDate: new Date(Date.now() + 86400000).toISOString(),
        endDate: new Date(Date.now() + 86400000 * 3).toISOString(),
        status: "Upcoming",
        description: "A curated selection of rare Indian and European masterworks from the 18th–20th century.",
    },
    {
        id: "a2",
        title: "Rare Manuscripts & Ancient Books",
        category: "Manuscripts & Books",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
        startDate: new Date(Date.now() - 86400000).toISOString(),
        endDate: new Date(Date.now() + 86400000 * 2).toISOString(),
        status: "Live",
        description: "Illuminated manuscripts, palm leaf texts, and rare first editions from private collections.",
    },
    {
        id: "a3",
        title: "Classical Sculptures & Bronzes",
        category: "Sculptures",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
        startDate: new Date(Date.now() - 86400000 * 5).toISOString(),
        endDate: new Date(Date.now() - 86400000).toISOString(),
        status: "Closed",
        description: "Chola bronzes, Gandhara sculptures, and 19th century European marble works.",
    },
    {
        id: "a4",
        title: "Antique Furniture & Decorative Arts",
        category: "Antique Furniture",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
        startDate: new Date(Date.now() + 86400000 * 5).toISOString(),
        endDate: new Date(Date.now() + 86400000 * 10).toISOString(),
        status: "Upcoming",
        description: "Mughal-era inlaid furniture, Victorian cabinets, and Indo-Portuguese antiques.",
    },
    {
        id: "a5",
        title: "Indian Miniature Paintings",
        category: "Paintings",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2058&auto=format&fit=crop",
        startDate: new Date(Date.now() + 86400000 * 2).toISOString(),
        endDate: new Date(Date.now() + 86400000 * 6).toISOString(),
        status: "Upcoming",
        description: "Rajput, Pahari, and Mughal miniatures from distinguished private collections.",
    },
    {
        id: "a6",
        title: "Ancient Coins & Numismatic Treasures",
        category: "Coins & Medals",
        image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1933&auto=format&fit=crop",
        startDate: new Date(Date.now() - 86400000 * 2).toISOString(),
        endDate: new Date(Date.now() + 86400000 * 1).toISOString(),
        status: "Live",
        description: "Mughal gold mohurs, Maratha copper coins, and rare British India silver rupees.",
    },
];

// ──────────────────────────────────────────────
// MOCK LOTS — Arts & Antiques only
// ──────────────────────────────────────────────
export const MOCK_LOTS: Lot[] = [
    // Auction a1 — Paintings (Upcoming)
    {
        id: "l1",
        auctionId: "a1",
        title: "Vrindavan Landscape at Dusk",
        artist: "Raja Ravi Varma (School)",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb39279c0f?q=80&w=2072&auto=format&fit=crop",
        price: 1250000,
        category: "Paintings",
        medium: "Oil on Canvas",
        year: "c. 1895",
        bids: 0,
    },
    {
        id: "l2",
        auctionId: "a1",
        title: "Abstract Composition in Gold & Ochre",
        artist: "S.H. Raza",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2576&auto=format&fit=crop",
        price: 3800000,
        category: "Paintings",
        medium: "Acrylic on Canvas",
        year: "1978",
        bids: 0,
    },
    // Auction a2 — Manuscripts (Live)
    {
        id: "l3",
        auctionId: "a2",
        title: "Illuminated Quran Folio",
        artist: "Persian School",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
        price: 485000,
        category: "Manuscripts & Books",
        medium: "Ink & Gold on Vellum",
        year: "c. 1600",
        bids: 7,
    },
    {
        id: "l4",
        auctionId: "a2",
        title: "Rigveda Palm Leaf Manuscript",
        artist: "Unknown Scribe",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        price: 620000,
        category: "Manuscripts & Books",
        medium: "Ink on Palm Leaf",
        year: "18th Century",
        bids: 4,
    },
    // Auction a3 — Sculptures (Closed)
    {
        id: "l5",
        auctionId: "a3",
        title: "Dancing Nataraja Bronze",
        artist: "Chola Period",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
        price: 8500000,
        category: "Sculptures",
        medium: "Bronze",
        year: "11th–12th Century",
        soldDate: "2026-01-15",
        bids: 18,
    },
    {
        id: "l6",
        auctionId: "a3",
        title: "Ganesh Idol in White Marble",
        artist: "Rajasthani School",
        image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1933&auto=format&fit=crop",
        price: 4200000,
        category: "Sculptures",
        medium: "White Marble",
        year: "17th Century",
        soldDate: "2026-01-15",
        bids: 11,
    },
    // Auction a4 — Furniture (Upcoming)
    {
        id: "l7",
        auctionId: "a4",
        title: "Mughal Inlaid Writing Desk",
        artist: "Mughal Craftsmen",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
        price: 750000,
        category: "Antique Furniture",
        medium: "Teak with Mother-of-Pearl Inlay",
        year: "c. 1720",
        bids: 0,
    },
    // Auction a5 — Miniatures (Upcoming)
    {
        id: "l8",
        auctionId: "a5",
        title: "Radha Krishna in Moonlight",
        artist: "Kishangarh School",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2058&auto=format&fit=crop",
        price: 320000,
        category: "Paintings",
        medium: "Opaque Watercolour on Paper",
        year: "c. 1760",
        bids: 0,
    },
    {
        id: "l9",
        auctionId: "a5",
        title: "Hunting Scene — Mughal Court",
        artist: "Mughal School",
        image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop",
        price: 290000,
        category: "Paintings",
        medium: "Opaque Watercolour & Gold on Wasli",
        year: "c. 1640",
        bids: 0,
    },
    // Auction a6 — Coins (Live)
    {
        id: "l10",
        auctionId: "a6",
        title: "Aurangzeb Gold Mohur",
        artist: "Mughal Mint",
        image: "https://images.unsplash.com/photo-1618764400608-9e7115eede84?q=80&w=2070&auto=format&fit=crop",
        price: 95000,
        category: "Coins & Medals",
        medium: "Gold",
        year: "1680 CE",
        bids: 5,
    },
    {
        id: "l11",
        auctionId: "a6",
        title: "Mauryan Punch-Marked Silver",
        artist: "Ancient Indian Mint",
        image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=2070&auto=format&fit=crop",
        price: 45000,
        category: "Coins & Medals",
        medium: "Silver",
        year: "3rd Century BCE",
        bids: 12,
    },
];

// ──────────────────────────────────────────────
// BLOGS
// ──────────────────────────────────────────────
export const MOCK_BLOGS: Blog[] = [
    {
        id: "b1",
        title: "Collecting Indian Miniatures: A Beginner's Guide",
        excerpt: "Discover the rich tradition of Indian miniature painting — from Mughal courts to Rajput kingdoms — and how to start your collection.",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=2058&auto=format&fit=crop",
        date: "Feb 10, 2026",
        category: "Guides",
    },
    {
        id: "b2",
        title: "Market Report: Chola Bronzes Command Record Prices",
        excerpt: "An in-depth analysis of why authenticated Chola period bronzes are reaching unprecedented auction results in 2026.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
        date: "Feb 02, 2026",
        category: "Market News",
    },
    {
        id: "b3",
        title: "Inside the Studio: Restoring a 17th Century Manuscript",
        excerpt: "Behind the scenes with our conservation team as they restore a rare Mughal-era manuscript to its original glory.",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
        date: "Jan 22, 2026",
        category: "Stories",
    },
];

// ──────────────────────────────────────────────
// CATEGORIES (for sidebar filters)
// ──────────────────────────────────────────────
export const CATEGORIES = [
    { name: "Paintings", image: "https://images.unsplash.com/photo-1579783902614-a3fb39279c0f?q=80&w=2072&auto=format&fit=crop" },
    { name: "Sculptures", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop" },
    { name: "Manuscripts & Books", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop" },
    { name: "Antique Furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop" },
    { name: "Ceramics & Pottery", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2070&auto=format&fit=crop" },
    { name: "Prints & Photographs", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" },
    { name: "Coins & Medals", image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=2070&auto=format&fit=crop" },
    { name: "Tribal Art", image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=2070&auto=format&fit=crop" },
];

// ──────────────────────────────────────────────
// DEPARTMENTS
// ──────────────────────────────────────────────
export const DEPARTMENTS: Department[] = [
    {
        name: "Paintings",
        slug: "paintings",
        description: "Indian classical, miniature, modern and contemporary paintings from renowned artists and ateliers across centuries.",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb39279c0f?q=80&w=2072&auto=format&fit=crop",
        lotCount: 142,
        icon: "🖼️",
    },
    {
        name: "Sculptures",
        slug: "sculptures",
        description: "Chola bronzes, Gandhara stone works, Rajasthani marble idols and European academic sculptures.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
        lotCount: 87,
        icon: "🗿",
    },
    {
        name: "Manuscripts & Books",
        slug: "manuscripts-books",
        description: "Illuminated Quran folios, Vedic palm leaf texts, Mughal farmans, and rare first-edition books.",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
        lotCount: 56,
        icon: "📜",
    },
    {
        name: "Antique Furniture",
        slug: "antique-furniture",
        description: "Mughal inlaid pieces, Indo-Portuguese cabinets, Victorian-era teak furniture and royal household objects.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
        lotCount: 63,
        icon: "🪑",
    },
    {
        name: "Ceramics & Pottery",
        slug: "ceramics-pottery",
        description: "Blue-pottery from Jaipur, Chinese export porcelain, Iznik tiles and ancient terracotta from Harappan sites.",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2070&auto=format&fit=crop",
        lotCount: 48,
        icon: "🏺",
    },
    {
        name: "Prints & Photographs",
        slug: "prints-photographs",
        description: "Vintage Company School prints, 19th century topographical photographs, and rare lithographs of Indian landscapes.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
        lotCount: 34,
        icon: "📷",
    },
    {
        name: "Coins & Medals",
        slug: "coins-medals",
        description: "Mauryan punch-marked coins, Mughal mohurs, East India Company currency, and rare commemorative medals.",
        image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=2070&auto=format&fit=crop",
        lotCount: 211,
        icon: "🪙",
    },
    {
        name: "Tribal Art",
        slug: "tribal-art",
        description: "Bastar brass work, Warli paintings, Dokra figurines, and rare ceremonial objects from tribal traditions across India.",
        image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=2070&auto=format&fit=crop",
        lotCount: 29,
        icon: "🎭",
    },
];

// ──────────────────────────────────────────────
// SERVICES
// ──────────────────────────────────────────────
export const SERVICES: Service[] = [
    {
        id: "s1",
        title: "Auction Consignment",
        description: "Sell your art and antiques through India's most trusted online auction platform. We handle everything from photography to settlement.",
        details: [
            "Free initial consultation and eligibility review",
            "Professional catalogue photography included",
            "Global reach to thousands of verified bidders",
            "Transparent commission structure — no hidden fees",
            "Full settlement within 30 days of auction close",
        ],
        icon: "🔨",
    },
    {
        id: "s2",
        title: "Expert Valuation",
        description: "Receive a certified valuation of your artwork or antique from our panel of specialist appraisers with decades of market experience.",
        details: [
            "Complimentary online valuation for single items",
            "Certified appraisal reports for insurance and estate purposes",
            "Specialists in Indian art, manuscripts, bronzes, and coins",
            "Turnaround in 5–7 business days",
            "Available in Mumbai, Delhi, Chennai, and Kolkata",
        ],
        icon: "🔍",
    },
    {
        id: "s3",
        title: "Authentication & Provenance",
        description: "Our independent experts verify authenticity, trace provenance, and issue certificates of genuineness for peace of mind.",
        details: [
            "Scientific analysis including X-ray and UV examination",
            "Archival provenance research",
            "Third-party expert panel review",
            "Full written authentication certificate issued",
            "Database cross-check with international returns records",
        ],
        icon: "🛡️",
    },
    {
        id: "s4",
        title: "Secure Shipping & Insurance",
        description: "End-to-end insured logistics for your precious acquisitions — from our storage to your door, anywhere in the world.",
        details: [
            "Specialist art packagers and art handlers",
            "Door-to-door tracking with real-time updates",
            "Full-coverage insurance during transit",
            "Climate-controlled transport for sensitive works",
            "International shipping to 60+ countries",
        ],
        icon: "📦",
    },
    {
        id: "s5",
        title: "Private Treaty Sales",
        description: "For exceptional works requiring discretion, our private treaty service connects buyers and sellers confidentially, without public auction.",
        details: [
            "Strictly confidential buyer-seller matching",
            "No public listing — full privacy guaranteed",
            "Access to our network of HNI and institutional collectors",
            "Negotiated pricing with specialist guidance",
            "Ideal for collections valued above ₹50 lakhs",
        ],
        icon: "🤝",
    },
    {
        id: "s6",
        title: "Corporate & Institutional Collections",
        description: "Advisory, acquisition, and deaccession services tailored for museums, corporations, and trusts managing significant art holdings.",
        details: [
            "Collection audit and strategic advisory",
            "Acquisition research and due diligence",
            "Deaccession planning to maximise returns",
            "Art investment portfolio reporting",
            "Dedicated relationship manager assigned",
        ],
        icon: "🏛️",
    },
];
