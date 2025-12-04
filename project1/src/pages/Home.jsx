import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"

const Home = () => {
    return(
        <>
            <Navbar/>
            <main className="">
                <HeroSection/>
            </main>
            <Footer/>
        </>
    )
} 

export default Home