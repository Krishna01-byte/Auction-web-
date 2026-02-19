import { Button } from "../ui/button";
import { Input } from "../ui/input";

const NewsletterSignup = () => {
    return (
        <section className="container py-24">
            <div className="bg-[#F5F3EF] rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Join TrueBid</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                    Subscribe to our newsletter to receive updates on upcoming auctions, expert insights, and exclusive events.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-white border-stone-300 focus-visible:ring-accent"
                        required
                    />
                    <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
                        Subscribe
                    </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4">
                    By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
            </div>
        </section>
    );
};

export default NewsletterSignup;
