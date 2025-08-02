import { useEffect, useState } from "react";
import Shared from "../shared/Shared";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactStars from "react-stars";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('../../public/reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <section className="my-20">
            <Shared text={"What Our Client say"} title={"testimonials"}></Shared>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className="text-center px-12">
                                {/* <Rating
      style={{ maxWidth: 180 }}
      emptySymbol={<i className="fa fa-star-o fa-2x text-gray-400"></i>}
      fullSymbol={<i className="fa fa-star fa-2x text-yellow-500"></i>}
      value={review.rating}
      readOnly
    /> */}
                                <div className="flex justify-center">
                                    <ReactStars
                                        count={5}
                                        value={review.rating}
                                        size={24}
                                        color2={'#ffd700'}
                                        edit={false}
                                    />
                                </div>
                                <p>{review.details}</p>
                                <p className="text-yellow-400 text-2xl">{review.name}</p>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>

        </section>
    );
};

export default Testimonial;