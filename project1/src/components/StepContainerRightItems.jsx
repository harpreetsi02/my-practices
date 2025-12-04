const StepContainerRightItems = () => {
    return(
        <div className="md:mx-16">
            <div className="relative flex flex-col gap-2 md:gap-4">

                {/* First Box */}
                <div className="flex w-fit flex-col gap-2 border border-gray-400 rounded-lg p-2 md:p-4 translate-x-12">
                    <div className="flex items-center justify-between gap-2 text-[10px] md:text-sm">
                        <div className="flex gap-2">
                            <i class="ri-macbook-fill"></i>
                            <p className="text-gray-800">Start in full-screen mode</p>
                        </div>
                        <div className="relative bg-gray-800 w-6 h-3 rounded-full">
                            <div className="absolute w-2 h-2 bg-white rounded-full translate-x-0.5 translate-y-0.5"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-xs md:text-sm">
                        <div className="flex gap-2">
                            <i class="ri-expand-horizontal-line -rotate-45"></i>
                            <p className="text-gray-800">Resizable</p>
                        </div>
                        <div className="relative bg-blue-600 w-6 h-3 rounded-full">
                            <div className="absolute w-2 h-2 bg-white rounded-full translate-x-3.5 translate-y-0.5"></div>
                        </div>
                    </div>
                </div>

                {/* Second Box */}
                <div className="flex flex-col gap-2 border w-fit border-gray-400 rounded-lg p-2 md:p-4 text-[10px] md:text-sm text-gray-800 -translate-x-18 md:-translate-x-32">
                    <h2 className="font-medium">Windows controls</h2>
                    <p>Allow fullscreen</p>
                    <p>Maximalize</p>
                    <p>Minimalize</p>
                </div>

                {/* Third Box */}
                <div className="flex flex-col w-fit gap-2 border border-gray-400 rounded-lg p-2 md:p-4 text-[10px] md:text-sm text-gray-800 translate-x-12">
                    <div className="flex items-center justify-between gap-2">
                        <i class="ri-expand-horizontal-s-fill"></i>
                        <p>Height</p>
                        <div className="border border-gray-400 rounded py-1 px-2 h-4 w-12 md:h-6 md:w-18"></div>
                        <div className="border border-gray-400 rounded py-1 px-2 h-4 w-12 md:h-6 md:w-18"></div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <i class="ri-expand-horizontal-s-fill"></i>
                        <p>Width</p>
                        <div className="border border-gray-400 rounded py-1 px-2 h-4 w-12 md:h-6 md:w-18"></div>
                        <div className="border border-gray-400 rounded py-1 px-2 h-4 w-12 md:h-6 md:w-18"></div>
                    </div>
                </div>
            </div>


            <div className="absolute translate-x-6 md:translate-x-2 -translate-y-45 md:-translate-y-68 flex items-center justify-center w-32 h-32 md:w-48 md:h-48 bg-white border border-gray-400 rounded-xl">
                <div className="flex flex-col gap-2 items-center justify-center w-28 h-28 md:w-40 md:h-40 border border-dashed bg-blue-100 rounded-lg">
                    <i class="ri-upload-cloud-fill text-xl text-blue-600"></i>
                    <p className="text-xs text-blue-600 text-center">Upload your <br /> app icon</p>
                </div>
            </div>
        </div>
    )
}

export default StepContainerRightItems