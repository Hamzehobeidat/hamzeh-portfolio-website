import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/av4.png';
import AVTR2 from '../../assets/av2.png';
import AVTR3 from '../../assets/av3.png';
import {Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar one" />
          </div>
          <h5 className="client__name">Hadeel Al Hawajreh</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="avatar two" />
          </div>
          <h5 className="client__name">Anas Aljawabrah</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="avatar three" />
          </div>
          <h5 className="client__name">Ismail Abusalah</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
