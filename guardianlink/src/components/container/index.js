import { NftRule } from "./section/nft-rule";
import { BrandMarket } from "./section/brand-market"
import { NftCreative } from "./section/nft-creative";
import { SpiderTech } from "./section/spider-tech";
import { LaunchPad } from "./section/launchpad";
import { DesignCreators } from "./section/design-to-creaters";
import { SupportSection } from "./section/support-section";
import { Journey } from "./section/journey";
import { AboutGaurdian } from "./section/about-gaurdian";
import { JoinUs } from "./section/join-us";
import { Ourteam } from "./section/our-team";
import { OurInvestors } from "./section/our-investors";
import { StickySocial } from "./sticky-social";

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
            <Journey />
            <AboutGaurdian />
            <Ourteam />
            <OurInvestors/>
            <JoinUs />
            <StickySocial/>
        </>
    )
}

export default Container;