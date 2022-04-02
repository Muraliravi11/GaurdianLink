import FormInput from 'components/shared-ui/form-input';
import React from 'react';

export const NftRule = () => { 
    return (
        <section className='section orange__gradient--dark'>
            <div className='section__heading'>
                <h2> <span className="roun_icon"> </span> NFT is ruling the <br /> <span className='white_color'>"emotional" commerce </span></h2>
            </div>

            <p className='section__text'>With over $2.5 Billion in NFT Sales already, the world is changing at the speed of light. Brands, Artists, Filmmakers, and Athletes all are part of the NFT revolution. For the new generation of digital collectors, NFT is a new asset class. It is a new tokenization paradigm, which gives you the brand leverage to instill an "authentic" feel in your first copies. Create an emotionally charged revenue base for your art, ideas, and products. 'NFT' your ideas, feelings, unpublished works, and the most dynamic moments of life to monetize your value perpetually through royalties. Be the first to create a market of the future completely democratized for creators and fans.</p>
           <div className='section__heading2'>
                <h4 >Build your NFT Marketplace in minutes with GuardianLink.</h4>
                <p>No Mess. No Clutter. Only You.</p>
            </div>
            <a href='#' className='section__black-btn'>Join the Revolution!</a>

            <div className="sub_form white_color">
                    <h3>I’m interested </h3>
                    <p>Be the first to hear about GuardianLink’s Updates</p>
                    
                    <FormInput className='nft_rule-form'/>
                    
                </div>
        </section>
    )
}