import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MOCK_LOTS, MOCK_AUCTIONS } from "@/data";
import { Link } from "react-router-dom";

const RecordLots = () => {
    const categories = ["Watches", "Art", "Jewelry"];

    return (
        <section className="bg-muted/30 py-20">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold">Record-Breaking Lots</h2>
                    <p className="text-muted-foreground mt-2">Extraordinary prices realized at recent events.</p>
                </div>

                <Tabs defaultValue="Watches" className="w-full">
                    <div className="flex justify-center mb-8">
                        <TabsList className="bg-transparent border-b rounded-none p-0 h-auto space-x-8">
                            {categories.map((category) => (
                                <TabsTrigger
                                    key={category}
                                    value={category}
                                    className="rounded-none border-b-2 border-transparent px-2 py-2 text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground bg-transparent shadow-none"
                                >
                                    {category}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {categories.map((category) => {
                        // Finding lots that belong to auctions of this category
                        const categoryAuctions = MOCK_AUCTIONS.filter(a => a.category === category).map(a => a.id);
                        const categoryLots = MOCK_LOTS
                            .filter(lot => categoryAuctions.includes(lot.auctionId))
                            .sort((a, b) => b.price - a.price)
                            .slice(0, 3);

                        return (
                            <TabsContent key={category} value={category} className="mt-0">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {categoryLots.map((lot) => (
                                        <div key={lot.id} className="group relative">
                                            <div className="aspect-square overflow-hidden rounded-xl bg-muted mb-4">
                                                <img
                                                    src={lot.image}
                                                    alt={lot.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium text-accent">{lot.artist}</p>
                                                <h3 className="font-serif text-lg font-bold">{lot.title}</h3>
                                                <p className="text-muted-foreground">Sold for ${lot.price.toLocaleString()}</p>
                                                {lot.soldDate && <p className="text-xs text-muted-foreground">on {new Date(lot.soldDate).toLocaleDateString()}</p>}
                                            </div>
                                            <Link to={`/auctions/${lot.id}`} className="absolute inset-0">
                                                <span className="sr-only">View Lot</span>
                                            </Link>
                                        </div>
                                    ))}
                                    {categoryLots.length === 0 && (
                                        <div className="col-span-3 text-center py-10 text-muted-foreground">
                                            No record lots found for this category.
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default RecordLots;
