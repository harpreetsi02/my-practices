const CardsSection = ({img, title, heading, details, para, name, work}) => {
    return(
        <div className="relative h-[600px] w-[480px] shrink-0 group rounded-2xl overflow-hidden">
            <img className="md:blur-lg w-full h-full object-cover group-hover:scale-110 group-hover:blur-none transition duration-700 ease-in-out" src={img} alt="img" />
            <div className="absolute px-8 py-8 w-full h-full flex flex-col justify-between top-4">
                <h2 className="flex items-center justify-center text-4xl font-bold">{title}</h2>
                <div className="flex flex-col gap-4">
                    <h4 className="text-4xl font-semibold">{heading} <br /> <span className="text-lg">{details}</span></h4>
                    <p className="max-w-88 text-lg">{para}</p>
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-bold text-lg">{name}</h4>
                            <p className="text-sm ">{work}</p>
                        </div>
                        <i class="ri-arrow-right-up-line text-2xl bg-gray-400/80 px-2 py-1 rounded-full group-hover:bg-blue-400/80"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsSection