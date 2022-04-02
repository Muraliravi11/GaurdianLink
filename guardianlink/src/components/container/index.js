import { NftRule } from "./nft-rule";
import { BrandMarket } from "./brand-market"
import { NftCreative } from "./nft-creative";
import { SpiderTech } from "./spider-tech";
import { LaunchPad } from "./launchpad";
import { DesignCreators } from "./design-to-creaters";
import { SupportSection } from "./support-section";
import { Journey } from "./journey";
const Container = () => { 
    return (
        <>
            <NftRule />
            <BrandMarket />
            <hr className="border-line" />
            <NftCreative />
            <SpiderTech />
            <LaunchPad />
            <DesignCreators />
            <SupportSection />
            <Journey/>
        </>
    )
}

export default Container;