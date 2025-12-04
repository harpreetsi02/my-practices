const FooterRightSection = () => {
    return(
        <div className="text-sm md:text-[16px] flex gap-20 md:gap-28">
            <div className="flex flex-col gap-4 md:gap-5">
                <h4 className="font-semibold">Side Map</h4>
                <ul className="flex flex-col gap-2 md:gap-3 whitespace-nowrap">
                    <li>Homerow</li>
                    <li>Technology</li>
                    <li>Machanical Keyboard</li>
                    <li>Pricious & rewords</li>
                    <li>Company</li>
                    <li>Contact Us</li>
                    <li>Portal</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 md:gap-5 whitespace-nowrap">
                <h4 className="font-semibold">Legal</h4>
                <ul className="flex flex-col gap-2 md:gap-3">
                    <li>Privacy Policy</li>
                    <li>Terms of Services</li>
                    <li>Lenger's Curse</li>
                </ul>
            </div>
        </div>
    );
}

export default FooterRightSection