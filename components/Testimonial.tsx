"use client";
import { TESTIMONIAL } from "@/constant";
import Image from "next/image";
import { RiDoubleQuotesR } from "react-icons/ri";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="padding-container max-container pt-16 bg-slate-10 relative">
      <h3 className="bold-32 text-center">Testimonial</h3>
      <p className="text-center max-w-lg m-auto text-gray-30 py-6">
       bk Lorem ipsum dolor sit, amet consectetsr adipisicing elit. Tenetur iure
        nulla nrepellat cupiditatse incidunt eaque dolorem similiqueyoOhjf
      </p>
      <Slider {...settings}>
        {TESTIMONIAL.map((testimonial) => (
          <TestimonialItem
            key={testimonial.title}
            title={testimonial.title}
            desc={testimonial.desc}
            profession={testimonial.profession}
            URL={testimonial.URL}
          />
        ))}
      </Slider>
    </section>
  );
};

type TestimonialItem = {
  desc: string;
  title: string;
  URL: string;
  profession: string;
};

const TestimonialItem = ({ title, profession, URL, desc }: TestimonialItem) => {
  return (
    <div className="mx-4 my-12 relative px-8 py-12 rounded-md bg-white z-10">
      <span className="text-slate-10 text-9xl absolute -top-4 right-4 -z-10">
        <RiDoubleQuotesR />
      </span>
      <p className="text-gray-50 text-center">{desc}</p>
      <div className="flexCenter gap-4 mt-8">
        <Image
          src={URL}
          alt="user"
          height={55}
          width={55}
          className="rounded-full"
        />
        <div>
          <div className="medium-14">{title}</div>
          <div className="text-gray-20 regular-14">{profession}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
