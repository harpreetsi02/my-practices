const Footer = () => {
    const products = ["Platform", "Edit mode", "GSAP", "Shared Libraries", "Hosting", "Security", "Analyze", "SEO", "DevLink LABS", "Accessibility", "Design", "Interactions", "Page building", "CMS", "Localization", "Ecommerce", "Optimize", "Webflow Cloud", "Figma to Webflow LABS", "Al"];
    const solutions = ["Enterprise", "Global alliances", "Freelancers", "Startups", "Agencies", "Classrooms"];
    const resources = ["University", "Customer stories", "Apps", "Templates", "Made in Webflow", "Livestreams", "Blog", "Webinars & ebooks", "Libraries", "Developers", "Glossary", "The Webflow Way"];
    const company = ["About", "Press", "Webflow Shop", "Privacy policy", "Accessibility statement", "Careers WE'RE HIRING", "Webflow Ventures", "Terms of Service", "Cookie policy"];
    const compare = ["Contentful", "Sitecore", "WordPress", "Framer", "Wix"];
    const community = ["Discover the community", "Certified Partners", "Become an affiliate", "Find a meetup near you", "Partner with Webflow", "Become a template designer", "Become a Global Leader"];
    const getHelp = ["Support", "Status", "Wishlist", "Pricing", "Forum"];

    return(
        <div className="mx-12 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2">
                <div className="flex flex-col md:row-span-2 gap-4 mt-10">
                    <h2 className="text-xl text-white font-semibold">Products</h2>
                    <div className="grid grid-cols-2 md:flex md:flex-col gap-2 items-center md:items-start justify-between space-x-6 whitespace-nowrap">
                        {products.map((name) => (
                            <a key={name} href="#" className="text-gray-300 text-lg font-light hover:text-blue-500 transition">
                                {name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-10">
                    <h2 className="text-xl text-white font-semibold">Solutions</h2>
                    <div className="grid grid-cols-2 md:flex md:flex-col gap-2 items-center md:items-start justify-between space-x-6 whitespace-nowrap">
                        {solutions.map((name) => (
                            <a key={name} href="#" className="text-gray-300 text-lg font-light hover:text-blue-500 transition">
                                {name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-10">
                    <h2 className="text-xl text-white font-semibold">Resources</h2>
                    <div className="grid grid-cols-2 md:flex md:flex-col gap-2 items-center md:items-start justify-between space-x-6 whitespace-nowrap">
                        {resources.map((name) => (
                            <a key={name} href="#" className="text-gray-300 text-lg font-light hover:text-blue-500 transition">
                                {name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-10">
                    <h2 className="text-xl text-white font-semibold">Company</h2>
                    <div className="grid grid-cols-2 md:flex md:flex-col gap-2 items-center md:items-start justify-between space-x-6 whitespace-nowrap">
                        {company.map((name) => (
                            <a key={name} href="#" className="text-gray-300 text-lg font-light hover:text-blue-500 transition">
                                {name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-10">
                    <h2 className="text-xl text-white font-semibold">Compare</h2>
                    <div className="grid grid-cols-2 md:flex md:flex-col gap-2 items-center md:items-start justify-between space-x-6 whitespace-nowrap">
                        {compare.map((name) => (
                            <a key={name} href="#" className="text-gray-300 text-lg font-light hover:text-blue-500 transition">
                                {name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-10">
                    <h2 className="text-xl text-white font-semibold">Community</h2>
                    <div className="grid grid-cols-2 md:flex md:flex-col gap-2 items-center md:items-start justify-between space-x-6 whitespace-nowrap">
                        {community.map((name) => (
                            <a key={name} href="#" className="text-gray-300 text-lg font-light hover:text-blue-500 transition">
                                {name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-10">
                    <h2 className="text-xl text-white font-semibold">Get Help</h2>
                    <div className="grid grid-cols-2 md:flex md:flex-col gap-2 items-center md:items-start justify-between space-x-6 whitespace-nowrap">
                        {getHelp.map((name) => (
                            <a key={name} href="#" className="text-gray-300 text-lg font-light hover:text-blue-500 transition">
                                {name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="py-10 md:flex md:justify-between">
                <div className="flex flex-col md:justify-end mb-10">
                    <h2 className="text-gray-300 mb-4 text-lg">&copy; Webflow, Inc. All Right Reserved</h2>
                    <div className="flex gap-8 text-gray-300 text-2xl">
                        <i class="ri-youtube-fill"></i>
                        <i class="ri-twitter-x-line"></i>
                        <i class="ri-facebook-circle-fill"></i>
                        <i class="ri-linkedin-box-fill"></i>
                        <i class="ri-instagram-fill"></i>
                        <i class="ri-tiktok-fill"></i>
                    </div>
                </div>
                <img src="https://dhygzobemt712.cloudfront.net/Mark/Mark_Logo_Blue.svg" alt="logo" className="md:w-2/4 md:-mt-40 md:-mr-20" />
            </div>

        </div>
    )
}

export default Footer