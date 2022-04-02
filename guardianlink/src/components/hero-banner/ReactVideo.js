import { useWindowSize } from "components/utils/useWindowSize";
import ReactPlayer from "react-player";

const desktopUrl = 'https://cdn.guardianlink.io/product-hotspot/images/nft_web_7.mp4';
const mobileUrl = 'https://cdn.guardianlink.io/product-hotspot/images/mob_video_2.mp4'

export const ReactVideo = () => { 
    const { width } = useWindowSize();
    const isMobile = width <= 992;

    return(
        <ReactPlayer
            playing={ true }
            loop
            url={ isMobile ? mobileUrl : desktopUrl}
            playsinline={ true }
            controls={false}
            volume={ 0 }
            muted={true}
            className='react-video'
            width='100%'
            height='100%'
           
        />
    )
}