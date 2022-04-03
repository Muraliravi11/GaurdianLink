import { Image } from 'components/shared-ui/image';

export const DesignCreators = () => { 
    return (
        <section className='section  yellow_gradient--dark'>
            <div className='section__heading'>
                <h2 className='smart-tit'><span className='high-num'>03</span> Minutes <span className='sm-text white_color'> from Design to Auction.</span></h2>
            </div>

            <p className='section__text'>GuardianLink's "LaunchPad" can get you up and running within minutes. It is one of the most sophisticated and customized platforms with templates, features, and full function NFT minting + publishing platform. LaunchPad uses integrated self-publishing tools and auction blocks for creating the NFT, designing the look & feel of your collections, and customizing it for "one-time" sale or "auction." It is integrated with all major markets and also completely seamless for collectors and buyers to use any wallet of their choice when it comes to bidding or purchasing. </p>
            <div className='section__heading2'>
                <h4 ><span className='white_color'>It is made for creators.</span> By creators.</h4>
            </div>
            <span className="roun_icon roun_icon__big creative-icon"> </span>
            <div className='db_screen'>
                <Image src='https://cdn.guardianlink.io/product-hotspot/images/vogue_app_2.png' />
            </div>
        </section>
    )
}