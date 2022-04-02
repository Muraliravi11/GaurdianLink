import React from 'react';
import { Image } from 'components/shared-ui/image';
import logo from 'resources/images/guardianlink_logo.svg'
import ListItem from 'components/shared-ui/list-item';
import { useWindowSize } from 'components/utils/useWindowSize';
import { MobileMenu } from './mobile-menu';

const navLink = [
    { text: 'About Us', url: '', type: 'link' },
    { text: 'No-Code Platform', url: '', type: 'link' },
    {
        text: 'Drops', url: '', type: 'sub_menu',
        subMenu: [{ text: 'Jump.trade ', url: '' }, { text: 'Chakra The Invincible NFTs ', url: '' }, { text: 'Amitabh NFTs', url: '' }]
    },
    { text: 'Join Our Discord', url: '' , type: 'link_button'},
]


export const Header = () => {
    const { width } = useWindowSize();

    const isMobile = width <= 1024;

    return(
        <header className='header__wrap'>
            <div className='header__logo'>
                <Image src={ logo }/>
            </div>

            <div className='header__list-wrap'>
                {!isMobile ? 
                    
                    <ul className='header__list'>
                        {navLink.length && navLink.map(({ text, url, type, subMenu }) =>
                            <ListItem url={url} text={text} type={type} subMenu={ subMenu }></ListItem>
                        )}
                    </ul>
                    :
                   <MobileMenu navLink={navLink}/>
                }
               

            </div>

        </header>
    )
}


