import HeroSlider from "../components/home/HeroSlider";
import AuctionsOnTheWay from "../components/home/AuctionsOnTheWay";
import RecordPriceLots from "../components/home/RecordPriceLots";
import BlogPreviewGrid from "../components/home/BlogPreviewGrid";
import ServicesSection from "../components/home/ServicesSection";
import NewsletterSignup from "../components/home/NewsletterSignup";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSlider />
            <AuctionsOnTheWay />
            <RecordPriceLots />
            <BlogPreviewGrid />
            <ServicesSection />
            <NewsletterSignup />
        </div>
    );
};

export default Home;
