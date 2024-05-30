    import '../styles/SliderBanner.css';
    import {useState, useEffect} from 'react';
    import { Swiper, SwiperSlide } from 'swiper/react'
    
    function SliderBanner ( { links }){
        const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    
          const handleSlideChange = (swiper) => {
            setCurrentSlideIndex(swiper.realIndex);
          };

          return (
            <div className="slider-container">
                <Swiper style={{ height: "100%", width: "100%" }}
                        
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={handleSlideChange}
                >
                 {links?.map((item, index) => (
                    <SwiperSlide key={item.id} style={{ height: "100%", width: "100%" }}>
                        <div 
                            className="slider-slide"
                                style={{
                                    backgroundImage: `url(${item.url})`,
                                }}
                        >
                        {/* Overlay and content can go here if needed */}
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
                <div className="slide-indicators">
                    {links?.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${currentSlideIndex === index ? 'active' : ''}`}
                    />
                    ))}
                </div>
            </div>
        )
    }
    export default SliderBanner