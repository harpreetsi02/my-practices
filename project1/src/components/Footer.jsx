import FooterLeftSection from "./FooterLeftSection";
import FooterRightSection from "./FooterRightSection";

const Footer = () => {
    return(
        <div className="flex flex-col justify-between md:flex-row gap-12 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.2)] bg-slate-200 px-16 md:px-20 py-12 md:py-16 mt-12">
            <FooterLeftSection/>
            <FooterRightSection/>
        </div>
    );
}

export default Footer