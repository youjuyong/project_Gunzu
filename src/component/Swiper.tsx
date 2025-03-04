import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import {SwiperImgList} from "../utils/ContextList";
import "swiper/css";
import "../assets/scss/comm/__swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LazyImageHook } from "../../src/utils/common/common";
SwiperCore.use([Navigation, Pagination, Autoplay ]);

interface slideListTp {
    url : string,
    alt : string
}

const SwiperComponent = () => {

    return (
        <Swiper
            spaceBetween   = { 0 }
            slidesPerView  = { 1 }
            centeredSlides = { true }
            loop           = { true }
            speed          = { 3e3  }
            scrollbar      = {{ draggable : true }}
            autoplay       = {{          
                                    delay : 3000
                   , disableOnInteraction : false
                              }}
            pagination     = {{ clickable : true }}
    
        >  
            { 
                SwiperImgList.map(( slideInfo : slideListTp, index : number ) : any => {
                    const src= require("../assets/image/" + ( slideInfo.url ) + ".PNG");
                    return (
                            <SwiperSlide key={ index }>
                                <LazyImageHook src={src} alt={slideInfo.alt} className='' height={503}/>
                            </SwiperSlide>
                           )
                })
            }
        </Swiper>
    )
}

export default SwiperComponent;