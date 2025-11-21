const HeroFeature = () => {
    return(
        <div className="hidden md:flex gap-4 mt-10">
            <div className="flex items-center text-gray-500 text-sm">
                <i class="ri-file-code-line"></i>
                <p>Code optional</p>
            </div>

            <div className="flex items-center text-gray-500 text-sm">
                <i class="ri-hand"></i>
                <p>Drag and drop builder</p>
            </div>

            <div className="flex items-center text-gray-500 text-sm">
                <i class="ri-macbook-line"></i>
                <p>Window, Mac, Linux</p>
            </div>
        </div>
    )
} 

export default HeroFeature