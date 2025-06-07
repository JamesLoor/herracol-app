/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination, Virtual } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/Slide.css";
import Image from "next/image";

export default function SlideSection({
  id,
  title,
  description,
  images,
  direction = "left",
}) {
  const slideKey = `slide-${id}`;

  return (
    <section className={`grid gap-3 md:gap-0 grid-cols-1 sm:grid-cols-2`}>
      <div
        className={`grid gap-3 pt-20 pb-6 px-[4%] sm:pt-6 md:pb-0 md:px-0 ${
          direction === "right" ? "md:pl-8 md:pr-[8%]" : "md:pr-8 md:pl-[8%]"
        }`}
      >
        <div className="flex gap-3 lg:gap-10 justify-between items-center">
          <div className="grid items-center gap-3 lg:gap-4">
            <h2 className="title text-3xl lg:text-5xl font-semibold">
              {title}
            </h2>
            <p className="paragraph text-gray lg:text-xl">{description}</p>

            <div className="h-full grid auto-cols-max grid-flow-col gap-3">
              <button
                className={`${`${slideKey}-button-prev`} bg-accent static! w-[50px]! h-[50px]! m-0! rounded-full flex items-center justify-center disabled:opacity-75`}
              >
                <Image
                  width={17}
                  height={19}
                  src="/icons/t-arrow.svg"
                  alt="arrow top"
                />
              </button>

              <button
                className={`${`${slideKey}-button-next`} bg-accent static! w-[50px]! h-[50px]! m-0! rounded-full flex items-center justify-center disabled:opacity-75`}
              >
                <Image
                  width={17}
                  height={19}
                  src="/icons/b-arrow.svg"
                  alt="arrow bottom"
                />
              </button>
            </div>
          </div>
          <div
            className={`hidden sm:grid ${slideKey}-pagination transform-none! ${
              direction === "right" ? "sm:-order-1" : ""
            }`}
          ></div>
        </div>
      </div>
      <Swiper
        direction="vertical"
        modules={[Navigation, Pagination, A11y, Autoplay, Virtual]}
        virtual
        navigation={{
          nextEl: `.${slideKey}-button-next`,
          prevEl: `.${slideKey}-button-prev`,
        }}
        pagination={{ clickable: true, el: `.${slideKey}-pagination` }}
        scrollbar={{ draggable: true }}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        mousewheel={false}
        className={`h-[300px] sm:h-[500px] md:h-[700px] ${
          direction === "right" ? "sm:-order-1" : ""
        }`}
      >
        {images.map(({ key, image, alt }, index) => {
          return (
            <SwiperSlide key={key} virtualIndex={index}>
              <img
                alt={alt}
                src={image}
                className="w-full h-full object-cover select-none"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
