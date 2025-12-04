import StepContainerLeftItems from "./StepContainerLeftItems"
import StepContainerRightItems from "./StepContainerRightItems"

const StepContainer = () => {
    return(
        <div className="mt-14 mx-6">
            <h2 className="text-4xl font-bold">How it works</h2>

            <div className="flex flex-col lg:flex-row items-center gap-8 justify-between border border-gray-400 rounded-lg py-12 px-8 md:py-20 md:px-20 mt-14">
                <StepContainerLeftItems/>
                <StepContainerRightItems/>
            </div>
        </div>
    )
}

export default StepContainer