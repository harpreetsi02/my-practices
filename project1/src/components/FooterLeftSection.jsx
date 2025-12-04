const FooterLeftSection = () => {
    return(
        <div className="flex flex-col gap-8">
            <div className="flex items-center gap2">
                <img src="hello" alt="logo" />
                <h2 className="font-bold text-xl md:text-2xl">ToDesktop</h2>
            </div>
            <p className="text-sm md:text-[16px] leading-snug md:leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ducimus, repellat dolore! Saepe eius, amet magni consectetur <br /> aliquam temporibus minus minima!</p>
            <div className="flex gap-4">
                <img src="sdf" alt="logo" />
                <img src="sdf" alt="logo" />
                <img src="sdf" alt="logo" />
                <img src="sdf" alt="logo" />
            </div>
            <div className="flex items-center justify-center gap-2 border border-black w-fit px-4 py-2 rounded-xl">
                <img src="hgj" alt="logo" />
                <h4 className="text-sm font-medium">Back To Top</h4>
            </div>
        </div>
    );
}

export default FooterLeftSection