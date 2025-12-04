const StepContainerLeftItems = () => {
    return(
        <div className="flex flex-col gap-6 w-fit">
            <p className="bg-yellow-100 py-1 px-2 rounded-lg w-fit border border-yellow-600 text-sm font-medium">Step 1</p>
            <h2 className="text-4xl font-medium">Bootstrap straight from your <br /> web app</h2>
            <p className="text-sm md:text-lg text-gray-800">Copu and paste your web app url into toDesktop. Customise <br /> your app design, app icon and window frame UI with no code</p>
            <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-gray-800 hover:opacity-90">
                    <i class="ri-check-line"></i>
                    <a className="text-sm underline" href="#">Multiple windows</a>
                </li>
                <li className="flex items-center gap-2 text-gray-800 hover:opacity-90">
                    <i class="ri-check-line"></i>
                    <a className="text-sm underline" href="#">Menubary/tray menus</a>
                </li>
                <li className="flex items-center gap-2 text-gray-800 hover:opacity-90">
                    <i class="ri-check-line"></i>
                    <a className="text-sm underline" href="#">Offline support</a>
                </li>
                <li className="flex items-center gap-2 text-gray-800 hover:opacity-90">
                    <i class="ri-check-line"></i>
                    <a className="text-sm underline" href="#">Customisable minus</a>
                </li>
                <li className="flex items-center gap-2 text-gray-800 hover:opacity-90">
                    <i class="ri-check-line"></i>
                    <a className="text-sm underline" href="#">Launch on startup</a>
                </li>
                <li className="flex items-center gap-2 text-gray-800 hover:opacity-90">
                    <i class="ri-check-line"></i>
                    <a className="text-sm underline" href="#">Tab (Mac only)</a>
                </li>
            </ul>
        </div>
    )
}

export default StepContainerLeftItems