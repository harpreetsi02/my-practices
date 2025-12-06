import CardsSection from "./CardsSection"
import HeroCardSection from "./HeroCardSection"
import HeroIdeaSection from "./HeroIdeaSection"
import HeroSecondCardSection from "./HeroSecondCardSection"
import HeroSectionHeading from "./HeroSectionHeading"

const HeroSection = () => {
    return(
        <div className="px-16 pt-16 bg-black h-full text-white overflow-hidden">
            <HeroSectionHeading/>
            <HeroCardSection/>  
            <HeroSecondCardSection/>
            <HeroIdeaSection/>
        </div>
    )
}

export default HeroSection