import CompanyContainers from "./CompanyContainers"
import HeroSliderText from "./HeroSliderText"

const HeroSlider = () => {
    return(
        <div className="flex flex-col gap-8 items-center justify-center mt-15 overflow-x-hidden">
            <HeroSliderText/>
            <CompanyContainers/>
        </div>
    )
}

export default HeroSlider