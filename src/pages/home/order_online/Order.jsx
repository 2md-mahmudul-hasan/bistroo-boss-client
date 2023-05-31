import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'


const Order = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={3}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <img src={slider1} alt='image' /></SwiperSlide>
      <SwiperSlide> <img src={slider2} alt='image' /></SwiperSlide>
      <SwiperSlide> <img src={slider3} alt='image' /></SwiperSlide>
      <SwiperSlide> <img src={slider4} alt='image' /></SwiperSlide>
      <SwiperSlide> <img src={slider5} alt='image' /></SwiperSlide>
      <SwiperSlide> <img src={slider1} alt='image' /></SwiperSlide>
      <SwiperSlide> <img src={slider2} alt='image' /></SwiperSlide>
      <SwiperSlide> <img src={slider3} alt='image' /></SwiperSlide>
      <SwiperSlide> <img src={slider4} alt='image' /></SwiperSlide>
      <SwiperSlide> <img src={slider5} alt='image' /></SwiperSlide>


    </Swiper>
  );
};

export default Order;