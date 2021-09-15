import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import banner1 from './assets/banners/Man city banner (1).jpg'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const SwiperItem = () => {
    return (
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="swiper-slide">
        <img src={banner1} alt=""/>
          
    </SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
      
    </Swiper>
    )
}

export default SwiperItem
