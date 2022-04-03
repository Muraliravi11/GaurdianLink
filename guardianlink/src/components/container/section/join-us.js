import { Image } from 'components/shared-ui/image';

export const JoinUs = () => { 
    return (
        <section className='section join-us'>
            <div className='section__heading'>
                <h2><span className='white_color'>Our</span> Team.</h2>
                <h3>#warpspeed <span className='white_color'>#crazygood</span></h3>
            </div>

            <p className='section__text'>We are a team 350+ Blockchain Pioneers, Hackers and Crazy Coders based in India. Our team & our mentors have collectively created ground breaking disruptions and come from these companies.</p>
           <div className='logo__sec'>
                <Image src='https://www.guardianlink.io/academy/wp-content/uploads/2022/03/Google-play-Games.png' />
                <Image src='https://cdn.guardianlink.io/product-hotspot/images/company_new_2.png'/>
                <Image src='https://cdn.guardianlink.io/product-hotspot/images/company_new_3.png' />
                <Image src='https://www.guardianlink.io/academy/wp-content/uploads/2022/03/PrimeGaming.png' />
                <Image src='https://cdn.guardianlink.io/product-hotspot/images/company_new_4.png' />
                <Image src='https://cdn.guardianlink.io/product-hotspot/images/company_new_5.png'/>
                <Image src='https://cdn.guardianlink.io/product-hotspot/images/company_new_6.png'/>
                <Image src='https://cdn.guardianlink.io/product-hotspot/images/company_new_7.png'/>
            </div>
            <p className='section__text'>We have collectively conceptualized, designed, architected and deployed the <span className='bold'>GuardianLink NFT Markets, Exchanges, LaunchPads and Social Tokens</span> across multiple countries and languages.</p>
            <p className='section__text'>We are dreamers of the new economy.<br/><span className='bold'>NFT Geeks | Location : Global</span></p>
            <div className='section__heading2'>
                <h3><span className='white_color'>Join</span> to Create the <span className='white_color'>Revolution</span> !</h3>
            </div>
            <div className="rn_cril"><span className="roun_icon roun_icon__big"></span><span className="roun_icon roun_icon__black"> </span> </div>
        </section>
    )
}