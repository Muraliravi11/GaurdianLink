import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Image } from "../image"
import CroppedContent from "../cropped-content"

export const Profile = ({ avatar, linkedIn, name, title, desc }) => { 
    return (
        <div className="profile">
            <div className="profile__avatar">
                <Image src={avatar} />
                {linkedIn !== null &&
                    <a href={ `https://www.linkedin.com/in/${linkedIn}`} className="linked-in">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                }
            </div>
            <h3 className="profile__name">{name }</h3>
            <p className="profile__title"> { title}</p>
            <div className="profile__desc">
                <CroppedContent  lines={4} desc={desc}  />
            </div>
        </div>
    )
}