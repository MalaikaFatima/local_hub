import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FeaturedServices from "../../components/home/FeaturedServices";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import HowItWorks from "../../components/home/HowItWorks";
import Testimonials from "../../components/home/Testimonials";
import CallToAction from "../../components/home/CallToAction";

function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Each section handles its own responsiveness */}
            <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
                <Hero />
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Categories />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FeaturedServices />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FeaturedProducts />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <WhyChooseUs />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <HowItWorks />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Testimonials />
                </div>

                <CallToAction />
            </div>
        </div>
    );
}

export default Home;