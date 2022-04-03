import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const socialIcons = [{ icon: faDiscord, url:''}, { icon: faTelegram, url:''}, { icon: faTwitter, url:''}]
export const StickySocial = () => { 
    return (
        <div className="sticky_social-icons">
             {socialIcons && socialIcons.map(({ icon, url }, index) =>
                <a key={index} className='social__icon' href={url}>
                    <FontAwesomeIcon icon={ icon } />
                </a>  
            )
            }
        </div>
    )
}