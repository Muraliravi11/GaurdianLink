import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTelegram, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialIcons = [{ icon: faDiscord, url:''}, { icon: faTelegram, url:''}, { icon: faTwitter, url:''}, { icon: faInstagram, url:''}]

export const SocialItems = () => { 
    return (
        <>
            <h5>Community</h5>

            {socialIcons && socialIcons.map(({ icon, url }, index) =>
                <a key={index} className='social__icon' href={url}>
                    <FontAwesomeIcon icon={ icon } />
                </a>  
            )
            }
        </>
    )
}