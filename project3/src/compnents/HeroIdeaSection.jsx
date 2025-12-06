const HeroIdeaSection = () => {
    return(
        <div className="flex items-center justify-between gap-20 flex-col md:flex-row my-30">
            <h2 className="text-5xl font-bold leading-snug md:text-6xl bg-linear-to-tr from-pink-300 to-white via-blue-400 bg-clip-text text-transparent">Go from idea to impact <br className="hidden lg:block"/> faster with AI</h2>
            <div>
                <p className="text-xl text-gray-400 mb-6">Create more space for creativity, collaboration, and higher-impact <br className="hidden lg:block"/> work by streamlining workflows, bringing dynamic web experiences <br className="hidden lg:block"/> to life, and optimizing web performance for humans and machines.</p>
                <div className="flex items-center gap-2 group">
                    <button className="underline underline-offset-2">Discover Webflow AI</button>
                    <i class="ri-arrow-right-line group-hover:translate-x-1 transition duration-300"></i>
                </div>
            </div>
        </div>
    )
}

export default HeroIdeaSection