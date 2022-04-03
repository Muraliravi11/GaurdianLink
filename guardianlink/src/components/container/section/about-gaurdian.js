import { Image } from "components/shared-ui/image"
import logo from 'resources/images/guardianlink_logo.svg';

export const AboutGaurdian = () => { 
    return (
        <section className='section about-gaurdian'>
            <Image src={logo} />
            <p className="white_color">World's #1 Distributed NFT Exchange Platform.<br />No-Code. Scalable. Secure.</p>
            <p className="red_txt">Branded. Intelligent. Trusted</p>
        </section>
    )
}