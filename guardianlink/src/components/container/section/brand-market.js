import { Image } from 'components/shared-ui/image';

export const BrandMarket = () => { 
    return (
        <section className='section'>
            <div className='section__heading'>
                <h2> Your "Branded" Marketplace</h2>
                <p>De-centralized. Open. Scalable. Secure. Within Minutes</p>
            </div>

            <p className='section__text'>Our marketplace allows you to create your own brand and exist in a decentralized architecture. With open and transparent design and ethics, we allow the creators to publish your NFTs across multiple marketplaces instantly. Our wallet integration allows collectors and fans to bid or purchase your products using their own choice of trusted wallets. With custom templates and complete smart contracts management, you publish, preview, mint, and manage your NFTs with a graphical user interface and drag and drop functionality. Scalable to millions of users, our auction framework is multi-threaded and decentralized.</p>
           <div className='section__heading2'>
                <h4 >Want to learn more about GuardianLink platform?</h4>
            </div>
            <a href="https://www.guardianlink.io/" className='section__black-btn'>Schedule A Meeting</a>

            <Image src='https://cdn.guardianlink.io/product-hotspot/images/marketplace_hand.png' className='hm_image' />
        </section>
    )
}