const HeroButtons = () => {
    return(
        <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-blue-600 text-white rounded-lg py-2 hover:opacity-95 border border-blue-800 md:px-8">Download Now</button>
            <button className="bg-white rounded-lg py-2 border border-gray-400 hover:bg-gray-50 md:px-8">Read Docs</button>
        </div>
    )
}

export default HeroButtons