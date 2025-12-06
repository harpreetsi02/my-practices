import CardsSection from "./CardsSection"

const HeroSecondCardSection = () => {
    return(

        <div className="mt-18">
            <h2 className="text-4xl font-semibold md:text-6xl ">300,000 brands move the <br className="hidden lg:block"/> needle with Webflow</h2>
            <div className="flex gap-6 overflow-hidden overflow-x-auto mt-14 no-scrollbar">
                <CardsSection
                    img={'https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960'}
                    title={'Lattice'}
                    heading={'20%'}
                    details={'Increase in site-wide conversion'}
                    para={"With Webflow, we've significanlty improved organic traffic, SEO, and conversions. From my prespective as CMO, that's a huge win because our brand is reaching more people."}
                    name={'Elizabeth Walton Egan'}
                    work={'CMO'}
                /> 

                <CardsSection
                    img={'https://webneel.com/daily/sites/default/files/images/daily/05-2013/8-best-wildlife-photography.jpg'}
                    title={'Range Theory'}
                    heading={'6M'}
                    details={'In cost savings annually'}
                    para={"We're saving upwards of $6 million a year with Webflow. and we've reinvested those savings in other areas like website optimization and localization... that's been really powerful."}
                    name={'Malcolm Greene'}
                    work={'Chief Information Officer'}
                /> 

                <CardsSection
                    img={'https://i.insider.com/567b09f4dd08955a058b48fb?width=800&format=jpeg&auto=webp'}
                    title={'Fivetran'}
                    heading={'98%'}
                    details={'Increase in speed to market'}
                    para={"With Webflow Enterprise, we're able to move with trust and confidence that things will get done quickly without compromising our brand or draining resources."}
                    name={'Cat Origitano'}
                    work={'VP of Product & Portfolio Marketing'}
                /> 

                <CardsSection
                    img={'https://img.freepik.com/free-photo/view-funny-monkey-with-sunglasses_23-2150758372.jpg?semt=ais_hybrid&w=740&q=80'}
                    title={'docusign'}
                    heading={'1,170%'}
                    details={'Increase in traffic YoY'}
                    para={"Webflow doesn't just allow to work faster and easier, but differntly. Speed is huge, but once you get engineers, designers, and copywriters to really enjoy working together, that's something different."}
                    name={'Caria Weis'}
                    work={'VP. Brand Creative'}
                /> 

                <CardsSection
                    img={'https://thumbs.dreamstime.com/b/gorilla-3666526.jpg'}
                    title={'WALKER'}
                    heading={'56%'}
                    details={'Increase in form fills'}
                    para={"Webflow empowers us to do whtat we do best as marketers, designers, and content creators: It strips away the technical complexity and unleashes us to be creative, try new things, and iterate quickly."}
                    name={'Kokko Tso'}
                    work={'VP Digital Marketing'}
                /> 
            </div>
            <p className="flex items-center justify-center mt-8 font-light"><button className="underline underline-offset-2">Talk to us</button>&nbsp;about how Webflow can unlock impact for your team.</p>
        </div>
    )
}

export default HeroSecondCardSection