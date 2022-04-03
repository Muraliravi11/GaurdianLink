import SupportWidget from "components/shared-ui/support-widget"
import { Image } from "components/shared-ui/image"
import LinkBtn from "components/shared-ui/link-btn"

export const SupportSection = () => { 
    return (
        <section className=" section support_section">
            <div className="section__heading">
                <h2>Intelligently <span className="red_txt">Integrated</span></h2>
                <p>Publishing. Plug-ins. Wallets. Markets.</p>
            </div>
            <SupportWidget className='third__party' title='Third Party Exchange Supported' badgeColor='red'>
                <Image width={200} src="https://cdn.guardianlink.io/product-hotspot/images/exchange_1.png" />
                <Image width={85} src="https://cdn.guardianlink.io/product-hotspot/images/exchange_2.png" />
                <Image width={250} src="https://cdn.guardianlink.io/product-hotspot/images/exchange_3.png" />
                <Image width={85} src="https://cdn.guardianlink.io/product-hotspot/images/exchange_4.png" />
                <Image width={85} src="https://cdn.guardianlink.io/product-hotspot/images/exchange_5.png"/>
            </SupportWidget>
            <SupportWidget className='wallet' title='Wallet Integration' badgeColor='red'>
                <Image src="https://cdn.guardianlink.io/product-hotspot/images/wallet_1.png" />
                <Image src="https://cdn.guardianlink.io/product-hotspot/images/wallet_2.png" />
                <Image src="https://cdn.guardianlink.io/product-hotspot/images/wallet_3.png" />
                <Image src="https://cdn.guardianlink.io/product-hotspot/images/wallet_4.png" />
            </SupportWidget>
            <SupportWidget className='widget' title='Widget Supported' badgeColor='black' icon={ true }>
                <Image src="https://cdn.guardianlink.io/product-hotspot/images/widget_1.png" />
                <Image src="https://cdn.guardianlink.io/product-hotspot/images/widget_2.png" />
                <Image src="https://cdn.guardianlink.io/product-hotspot/images/widget_4.png" />
            </SupportWidget>

            <LinkBtn href='https://www.guardianlink.io/' className='section__black-btn'>Power with Partnership {'>'}</LinkBtn>

        </section>
    )
}