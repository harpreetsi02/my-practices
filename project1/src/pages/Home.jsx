import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"

const Home = () => {
    return(
        <>
            <Navbar/>
            <main className="">
                <HeroSection/>
                
                <div className="min-h-screen"></div>
            </main>
        </>
    )
} 

export default Home