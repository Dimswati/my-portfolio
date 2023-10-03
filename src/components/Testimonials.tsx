"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {}

const Testimonials = (props: Props) => {
    return (
        <Swiper
            modules={[]}
            // slidesPerView={1}
            spaceBetween={10}
            autoplay={true}
            loop={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                    <img
                        src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/avatar-1.jpg"
                        className="w-24 h-24 rounded-full object-cover object-center outline outline-2 outline-fuchsia-200 outline-offset-2 mx-auto mb-6"
                    />
                    <h4 className="text-2xl font-medium mb-2">
                        Customers and interested parties engaged.
                    </h4>
                    <p className="text-base text-neutral-800 antialiased mb-6">
                        “I found it easy to capture my ideas and sketch visuals to
                        sheare with my clints on the go”
                    </p>
                    <div className="text-base">
                        <h5 className="font-medium">Jane Kamau</h5>
                        <p className=" text-neutral-600">CEO at scaleAi</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                    <img
                        src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/avatar-1.jpg"
                        className="w-24 h-24 rounded-full object-cover object-center outline outline-2 outline-fuchsia-200 outline-offset-2 mx-auto mb-6"
                    />
                    <h4 className="text-2xl font-medium mb-2">
                        Customers and interested parties engaged.
                    </h4>
                    <p className="text-base text-neutral-800 antialiased mb-6">
                        “I found it easy to capture my ideas and sketch visuals to
                        sheare with my clints on the go”
                    </p>
                    <div className="text-base">
                        <h5 className="font-medium">Jane Kamau</h5>
                        <p className=" text-neutral-600">CEO at scaleAi</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                    <img
                        src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/avatar-1.jpg"
                        className="w-24 h-24 rounded-full object-cover object-center outline outline-2 outline-fuchsia-200 outline-offset-2 mx-auto mb-6"
                    />
                    <h4 className="text-2xl font-medium mb-2">
                        Customers and interested parties engaged.
                    </h4>
                    <p className="text-base text-neutral-800 antialiased mb-6">
                        “I found it easy to capture my ideas and sketch visuals to
                        sheare with my clints on the go”
                    </p>
                    <div className="text-base">
                        <h5 className="font-medium">Jane Kamau</h5>
                        <p className=" text-neutral-600">CEO at scaleAi</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                    <img
                        src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/avatar-1.jpg"
                        className="w-24 h-24 rounded-full object-cover object-center outline outline-2 outline-fuchsia-200 outline-offset-2 mx-auto mb-6"
                    />
                    <h4 className="text-2xl font-medium mb-2">
                        Customers and interested parties engaged.
                    </h4>
                    <p className="text-base text-neutral-800 antialiased mb-6">
                        “I found it easy to capture my ideas and sketch visuals to
                        sheare with my clints on the go”
                    </p>
                    <div className="text-base">
                        <h5 className="font-medium">Jane Kamau</h5>
                        <p className=" text-neutral-600">CEO at scaleAi</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                    <img
                        src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/avatar-1.jpg"
                        className="w-24 h-24 rounded-full object-cover object-center outline outline-2 outline-fuchsia-200 outline-offset-2 mx-auto mb-6"
                    />
                    <h4 className="text-2xl font-medium mb-2">
                        Customers and interested parties engaged.
                    </h4>
                    <p className="text-base text-neutral-800 antialiased mb-6">
                        “I found it easy to capture my ideas and sketch visuals to
                        sheare with my clints on the go”
                    </p>
                    <div className="text-base">
                        <h5 className="font-medium">Jane Kamau</h5>
                        <p className=" text-neutral-600">CEO at scaleAi</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-8 border-2 border-fuchsia-200 rounded-xl text-center">
                    <img
                        src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/avatar-1.jpg"
                        className="w-24 h-24 rounded-full object-cover object-center outline outline-2 outline-fuchsia-200 outline-offset-2 mx-auto mb-6"
                    />
                    <h4 className="text-2xl font-medium mb-2">
                        Customers and interested parties engaged.
                    </h4>
                    <p className="text-base text-neutral-800 antialiased mb-6">
                        “I found it easy to capture my ideas and sketch visuals to
                        sheare with my clints on the go”
                    </p>
                    <div className="text-base">
                        <h5 className="font-medium">Jane Kamau</h5>
                        <p className=" text-neutral-600">CEO at scaleAi</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Testimonials