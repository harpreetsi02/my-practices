const VersionText = () => {
    return(
        <div className="flex items-center gap-2 bg-yellow-100 w-fit py-1 px-3 rounded-lg border border-yellow-400 shadow-md hover:-translate-y-2 transition hover:shadow-xl group">
            <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
            <h4 className="text-sm text-yellow-600">v0.21.1: <span className="text-yellow-800 text-sm font-medium">Find in page bug fixes</span></h4>
            <i class="ri-arrow-right-line text-yellow-600 font-bold group-hover:translate-x-1 transition duration-300"></i>
        </div>
    )
}

export default VersionText