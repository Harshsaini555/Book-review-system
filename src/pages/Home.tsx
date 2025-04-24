import Footer from '../components/Landing/footer';
// import Contact from '../components/Landing/Contact';
import Faqs from '../components/Landing/Faq';
import Navigation from '../components/Landing/navigation';
import Hero from '../components/Landing/hero';
import Features from '../components/Landing/Feature';
import Testimonials from '../components/Landing/Testimonials';
import OthersLove from '../components/Landing/OthersLove';
import ContactCTA from '../components/Landing/CTA';

export default function Home(){
    return(
        <div className='h-[100%] w-[100%] overflow-x-hidden '>
            <Navigation />
            <Hero />
            <Features />
            <OthersLove />
            <Testimonials />
            <Faqs />
            <ContactCTA />
            <Footer />
        </div>
    )
}