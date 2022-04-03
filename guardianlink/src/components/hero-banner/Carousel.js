import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Slide1 , Slide2, Slide3} from './Slides'

export const Carousel = () => { 

    const options = {
        type  : 'fade',
        autoplay: true,
        interval: 4000,
        pagination: false,
        arrows: false,
        rewind: true,
        pauseOnHover: false
    }
    
    return (
        <Splide options={options} className='hero-banner__slide'>
            <SplideSlide><Slide1/></SplideSlide>
            <SplideSlide><Slide2/></SplideSlide>
            <SplideSlide><Slide3/></SplideSlide>   
        </Splide>
    )
}