import { Image } from 'components/shared-ui/image';

export const SpiderTech = () => { 
    return (
        <section className='section orange_gradient--light'>
            <div className='section__heading'>
                <h2> Anti.Rip AI<span className='white_color'> Spyder </span>Technology</h2>
                <p>Intelligent. Aware. Insightful.</p>
            </div>
            <p className='section__text'>Realtime Spyder Technology designed by GuardianLink allows your NFT to be monitored across the web for duplicates, rip-offs and copy cats that can damage your brand and impact your auction. Protect your NFT asset as a creator and a collector by launching on GuardianLink’s Legitimacy Protocol. Our protocol is based on artificial intelligence matching and referencing to intercept and initiate alerts for Anti.Rip algorithms. Our platform is secured, safe and our spyders are GuardianLink of your assets.</p>
            <Image src='https://cdn.guardianlink.io/product-hotspot/images/spider_icon.png'/>
            <div className='section__heading2'>
                <h4 >Find Your Counterfeit NFTs.</h4>
                <p>Access GuardianLink Anti.Rip Spyder today.</p>
            </div>
        </section>
    )
}