import NavBar from "./components/NavBar.jsx";
import Hero from "./Hero.jsx";
import ProductViewer from "./ProductViewer.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase.jsx";
import Features from "./components/Feature.jsx";
import Highlights from "./components/Highlights.jsx";
import Footer from "./components/Footer.jsx";
import PerformanceSection from "./components/Performance.jsx";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <PerformanceSection />
            <Features />
            <Highlights />
            <Footer />
        </main>
    )
}
export default App
