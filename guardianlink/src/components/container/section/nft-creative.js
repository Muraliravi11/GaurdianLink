import { Image } from 'components/shared-ui/image';

export const NftCreative = () => { 
    return (
        <section className='section pb-0'>
            <div className='section__heading'>
                <h2><span className='pink_color'>NFT</span> Your Most Creative Moments</h2>
                <p>Art. Music. Films. Animations. Unpublished Works.</p>
            </div>

            <p className='section__text'>Everything under the sun has value, when it has emotion attached to it. With emotional commerce, fans have a rare chance to own a moment of their most favorite celebrities' life dream. Creators now can own their brand and find the connect to their fans who cherish their art, live with their music and get inspired with their thoughts. It is not about monetization, it is about perpetual value creation, where the NFT asset is the sole connection between you and your admirer. It’s not just fame and money, its about who you are a person now matters when it comes to NFTs. It’s your life’s work.</p>

            <Image src='https://cdn.guardianlink.io/product-hotspot/images/web_mobile_2.png' className='hm_image_static' />
        </section>
    )
}