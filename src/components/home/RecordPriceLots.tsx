import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MOCK_LOTS, MOCK_AUCTIONS } from "@/data";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const RecordPriceLots = () => {
    // Categories for the tabs
    const categories = ["Paintings", "Sculptures", "Manuscripts & Books"];

    return (
        <section className="bg-[#F5F3EF] py-20 border-y border-stone-200">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-primary">Record Price Lots</h2>
                    <p className="text-muted-foreground mt-2">Extraordinary results from our recent auctions.</p>
                </div>

                <Tabs defaultValue={categories[0]} className="w-full">
                    <div className="flex justify-center mb-10">
                        <TabsList className="bg-transparent border-b border-stone-300 rounded-none p-0 h-auto space-x-8">
                            {categories.map((category) => (
                                <TabsTrigger
                                    key={category}
                                    value={category}
                                    className="rounded-none border-b-2 border-transparent px-4 py-3 text-base text-muted-foreground data-[state=active]:border-accent data-[state=active]:text-primary bg-transparent shadow-none transition-all"
                                >
                                    {category}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {categories.map((category) => {
                        // Find lots matching the category (either directly or via auction category)
                        const categoryLots = MOCK_LOTS
                            .filter(lot => lot.category === category || MOCK_AUCTIONS.find(a => a.id === lot.auctionId)?.category === category)
                            .sort((a, b) => b.price - a.price) // Highest price first
                            .slice(0, 3);

                        return (
                            <TabsContent key={category} value={category} className="mt-0 focus-visible:outline-none ring-offset-background">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {categoryLots.map((lot) => (
                                        <div key={lot.id} className="group relative bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted mb-4">
                                                <img
                                                    src={lot.image}
                                                    alt={lot.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="space-y-2 text-center">
                                                <p className="text-sm font-medium text-accent uppercase tracking-wider">{lot.artist}</p>
                                                <h3 className="font-serif text-xl font-bold text-primary">{lot.title}</h3>
                                                <div className="text-primary font-semibold">
                                                    Sold for ₹{lot.price.toLocaleString()}
                                                </div>
                                            </div>
                                            <Link to={`/auctions/${lot.id}`} className="absolute inset-0">
                                                <span className="sr-only">View Lot</span>
                                            </Link>
                                        </div>
                                    ))}
                                    {categoryLots.length === 0 && (
                                        <div className="col-span-3 text-center py-16 text-muted-foreground">
                                            No record lots found for this category.
                                        </div>
                                    )}
                                </div>
                                <div className="mt-10 text-center">
                                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                                        View Past Results
                                    </Button>
                                </div>
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default RecordPriceLots;
