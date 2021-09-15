import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import avatar from './assets/avatar.png'
import './Swiper.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const SwiperItem = () => {
    const data = [
        {
            id:"1",
            username:"James ",
            testimonial:' when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            id:"1",
            username:"James ",
            testimonial:' when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            id:"1",
            username:"James ",
            testimonial:' when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
            id:"1",
            username:"James ",
            testimonial:' when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
    ]
    return (
        <div className="swiper">
           <Swiper
      spaceBetween={50}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
     onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     {data.map(user =>(
         <SwiperSlide key = {user.id} className="slider">
             <div className="slider-content">
                 <div className="slider-image">
                     <img className="user-photo" src={avatar} alt=""/>
                     <h2 className="slider-username">{user.username}</h2>
                     <p className="slider-testimonial">{user.testimonial}</p>
                 </div>
             </div>
         </SwiperSlide>
     ))}
      ...
    </Swiper> 
        </div>
    )
}

export default SwiperItem
