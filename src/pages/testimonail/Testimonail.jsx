import { useEffect, useState } from 'react';
import SectionTitle from '../../components/section_title/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonail = () => {
  const [review, setReview] = useState([])
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReview(data))
  })

  return (
    <section>
      <SectionTitle heading={"TESTIMONIALS"} subheading={"---What Our Clients Say---"}></SectionTitle>
      <div className="">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          className="mySwiper"
        >

          {review.map(review =>
            <SwiperSlide key={review._id}>
              <div className=' flex flex-col items-center  text-center bg-slate-400 text-black'>

                <Rating className=''
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className='p-8 text-orange-500'>{review.details}</p>
                <h3>{review.name}</h3>
              </div>
            </SwiperSlide>

          )}

        </Swiper>
      </div>

    </section>
  );
};

export default Testimonail;