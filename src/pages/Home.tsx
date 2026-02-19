import HeroSlider from "../components/home/HeroSlider";
import AuctionsOnTheWay from "../components/home/AuctionsOnTheWay";
import NewsletterSignup from "../components/home/NewsletterSignup";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSlider />
            <AuctionsOnTheWay />
            <NewsletterSignup />
        </div>
    );
};

export default Home;
