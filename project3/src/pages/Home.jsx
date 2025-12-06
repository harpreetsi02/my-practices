import Footer from "../compnents/Footer"
import HeroSection from "../compnents/HeroSection"
import Navbar from "../compnents/Navbar"

const Home = () => {
    return(
        <div className="bg-black overflow-hidden">
            <Navbar/>
            <main>
                <HeroSection/>
            </main>
            <Footer/>
        </div>
    )
}

export default Home