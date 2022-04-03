import React, { useState } from 'react'
import ListItem from 'components/shared-ui/list-item';

export const MobileMenu = ({ navLink }) => { 
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() { 

        setIsOpen(!isOpen)
    }
    return (
        <div className={`sidebar__menu ${isOpen ? 'isOpen' : ''} `}>
            <div className='hamberger_menu' onClick={handleToggle}>
                <span></span> <span></span> <span></span>
            </div>
            <nav className='sidebar__menu-wrap'>
                <ul className='sidebar__menu-list'>
                    {navLink.length && navLink.map(({ text, url, type, subMenu },index) =>
                        <ListItem key={index} url={url} text={text} type={type} subMenu={ subMenu }></ListItem>
                    )}
                </ul>
            </nav>
        </div>
    )
}