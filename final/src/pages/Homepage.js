import "../assets/css/style.css"
import Clients from "../components/Clients";
import Features from "../components/Features";
import Header from "../components/Header";
import Hero from '../components/Hero'
import Pricing from '../components/Pricing';
import Footer from "../components/Footer";

export default function Homepage() {
    return (
            <div class="body-wrap">
			<Header />
			<main class="site-content">
			<Hero />	
			<Clients />	
			<Features />	
			<Pricing />	
			</main>
			<Footer />
		</div>
    );
}