import HeroButtons from "./HeroButtons"
import HeroFeature from "./HeroFeature"
import HeroSlider from "./HeroSlider"
import MainHeading from "./MainHeroHeading"
import VersionText from "./VersionText"

const HeroSection = () => {
    return(
        <div className="min-h-auto bg-linear-to-b from-purple-50 via-orange-50 to-transparent">
            <div className="md:flex md:flex-col md:items-center py-10 md:py-14 px-6">
                <VersionText/>
                <HeroFeature/>
                <MainHeading/>
                <HeroButtons/>
            </div>
            <div>
                <HeroSlider/>
            </div>
        </div>
    )
}

export default HeroSection