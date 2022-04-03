import React from 'react';

export const ListItem = ({ url, text, type , subMenu} ) => { 
    return (
        <li className='nav__list'>
            { type === 'link' &&
                <a href={url} className='nav__link'>
                    { text }
                </a>
            }
            { type === 'link_button' &&
                <a href={url} className='nav__link-btn'>
                    { text }
                </a>
            }
            { type === 'sub_menu' &&
                <div className='nav__sub-menu'>
                    <a href={url} className='nav__link has-menu'>
                        {text}
                    </a>
                    <ul className='submenu__items'>
                        {subMenu && subMenu.map(({ text, url },index) =>
                            <li key={index}>
                                <a href={url} className='nav__link'> { text }</a>
                            </li>
                        )
                            
                        }
                    </ul>
                </div>
            }
            
        </li>
    )
}