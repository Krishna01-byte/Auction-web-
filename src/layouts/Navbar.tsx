import { Link } from "react-router-dom";
import { Search, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-8">
                    {/* Mobile Menu Trigger */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden -ml-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        <span className="sr-only">Toggle Menu</span>
                    </Button>

                    <Link to="/" className="flex items-center space-x-2">
                        <span className="font-serif text-2xl font-bold tracking-tight">TRUEBID.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">

                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground outline-none">
                                Auctions <ChevronDown className="h-3 w-3" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem><Link to="/auctions?status=upcoming">Upcoming</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link to="/auctions?status=live">Live</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link to="/auctions?status=past">Past</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link to="/results">Results</Link></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground outline-none">
                                Departments <ChevronDown className="h-3 w-3" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem><Link to="/departments/modern-indian-art">Modern Indian Art</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link to="/departments/jewellery">Jewellery</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link to="/departments/timepieces">Timepieces</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link to="/departments/silver">Silver</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link to="/departments/furniture">Furniture</Link></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link to="/services" className="transition-colors hover:text-foreground">Services</Link>
                        <Link to="/about" className="transition-colors hover:text-foreground">About Us</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="hidden md:flex gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                                <User className="h-5 w-5" /> Login
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem><Link to="/login">Login</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link to="/signup">Signup</Link></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden border-t bg-background">
                    <nav className="container flex flex-col gap-4 py-8 text-lg font-medium">
                        <Link to="/auctions" onClick={() => setIsMenuOpen(false)}>Auctions</Link>
                        <Link to="/departments" onClick={() => setIsMenuOpen(false)}>Departments</Link>
                        <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                        <hr className="my-2 border-border" />
                        <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
