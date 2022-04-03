import { Image } from 'components/shared-ui/image';

export const LaunchPad = () => { 
    return (
        <section className='section pb-0'>
            <div className='section__heading'>
                <h2>Instant <span className='pink_color'>"LaunchPad" </span> Model</h2>
                <p>Customizable. Scalable. Secured. Integrated for Creatives.</p>
            </div>

            <Image src="https://cdn.guardianlink.io/product-hotspot/images/vogue_app_4.png" className='hm_image_static2' />  
        </section>
    )
}