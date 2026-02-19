import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const Footer = () => {
    return (
        <footer className="w-full border-t bg-[#F5F3EF] py-16">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <span className="font-serif text-2xl font-bold tracking-tight text-primary">TRUEBID.</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        The premier destination for exclusive art, jewelry, and collectibles. Experience the elegance of bidding.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-6 text-primary">Marketplace</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link to="/auctions?status=upcoming" className="hover:text-primary transition-colors">Upcoming Auctions</Link></li>
                        <li><Link to="/auctions?status=live" className="hover:text-primary transition-colors">Live Auctions</Link></li>
                        <li><Link to="/departments" className="hover:text-primary transition-colors">Departments</Link></li>
                        <li><Link to="/results" className="hover:text-primary transition-colors">Past Results</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-6 text-primary">Company</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                        <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
                        <li><Link to="#" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-6 text-primary">Stay Updated</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                        Subscribe to our newsletter for the latest updates and exclusive offers.
                    </p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex h-10 w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        />
                        <Button className="bg-primary text-white hover:bg-primary/90">Subscribe</Button>
                    </div>
                </div>
            </div>
            <div className="container mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                <p>&copy; 2026 TrueBid. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="#" className="hover:text-primary">Privacy Policy</Link>
                    <Link to="#" className="hover:text-primary">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
