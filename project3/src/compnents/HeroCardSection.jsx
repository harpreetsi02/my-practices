const HeroCardSection = () => {
    return(
        <div className="flex flex-col items-center justify-center gap-12 mt-12">
            <h2 className="text-4xl md:text-6xl text-center font-medium">The website experience platform for high-performing brands</h2>

            {/* Cards start here */}
            <div id="cards" className="flex flex-col md:flex-row gap-6 overflow-hidden">
                <div className="relative bg-blue-700 rounded-2xl overflow-hidden group">
                    <img src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b84cae6b5dd841d1e9fc49_home_platform_card-1.webp" alt="photo" />
                    <div className="absolute w-full flex items-center justify-between bottom-2 px-4 py-3">
                        <h4 className="text-xl">Build powerful brand experiences</h4>
                        <button className="bg-gray-500/80 group-hover:bg-blue-500/80 px-2 py-1 rounded-full h-fit"><i class="ri-add-line text-2xl"></i></button>
                    </div>
                </div>
                <div className="relative overflow-hidde group ">
                    <img className="rounded-2xl" src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68b84e1aa441592c04ada2ed_home_platform_card-2.webp" alt="photo" />
                    <div className="absolute w-full flex items-center justify-between bottom-2 px-4 py-3">
                        <h4 className="text-xl">Manage content that converts, at scale</h4>
                        <button className="bg-gray-500/80 group-hover:bg-blue-500/80 px-2 py-1 rounded-full h-fit"><i class="ri-add-line text-2xl"></i></button>
                    </div>
                </div>
                <div className="relative overflow-hidde group">
                    <img className="rounded-2xl" src="https://cdn.prod.website-files.com/686294e263eb7e215bd232f7/68c632d3ac920cf61b28450c_home_platform_card-3.webp" alt="photo" />
                    <div className="absolute w-full flex items-center justify-between bottom-2 px-4 py-3">
                        <h4 className="text-xl">Optimize for conversion with AI</h4>
                        <i class="ri-add-line text-2xl bg-gray-500/80 group-hover:bg-blue-500/80 px-2 py-1 rounded-full h-fit"></i>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:max-w-1/2 my-25">
                <p className="text-2xl md:text-3xl font-light">With the advent of AI, your brand has never mattered more. A good-looking site isn't enough; to stay relevant, you need dynamic digital experiences that resonate with humans and are readable by bots. You need Webflow's AI-native website experience platform.</p>
                <div className="mt-4 flex items-center group">
                    <button className="text-lg underline underline-offset-4 mr-2">Discover Webflow AI</button> 
                    <i class="ri-arrow-right-up-line text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"></i>
                </div>
            </div>
        </div>
    )
}

export default HeroCardSection