import { ABOUT } from "@/constant";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="max-container padding-container py-24">
      <div className=" flex flex-col gap-8 lg:flex-row pb-24">
        {/* LEFT */}
        <div className="flex flex-1 flex-col items-start justify-center">
          <h1 className="bold-52 capitalize pb-4">
            Join Us In Exploring The Entire World Smoothly expef
          </h1>
          <p className="text-gray-50">
           NO Lorem ipsum no dolor sit amet consectetur adipisicing elit.
            Perferendis, illum temporibus aliquid distinctio eligendi nostrum
            porro molestiae ea, necessitatibuv
          </p>
          <br />
          <p className="text-gray-50">
            no Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            error corrupti ex aperiam doloribus error corrupti ex aperiam
            doloribus
          </p>
          <div className="flex flex-wrap mt-8">
            {ABOUT.map((about) => (
              <AboutItem
                key={about.title}
                title={about.title}
                icon={about.icon}
              />
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex flex-1 gap-4 lg:gap-8">
          <div>
            <Image
              src="/about1.jpg"
              alt="about"
              height={444}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mb-12"
            />
          </div>
          <div>
            <Image
              src="/about2.jpg"
              alt="about"
              height={444}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mt-12"
            />
          </div>
        </div>
      </div>

      {/* SECOND CONTAINER */}

      <div className=" flex flex-col gap-8 lg:flex-row">
        {/* LEFT */}
        <div className="flex flex-1 gap-4 lg:gap-8">
          <div>
            <Image
              src="/about1.jpg"
              alt="about"
              height={444}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mb-12"
            />
          </div>
          <div>
            <Image
              src="/about2.jpg"
              alt="about"
              height={444}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mt-12"
            />
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex flex-1 flex-col items-start justify-center">
          <h1 className="bold-52 capitalize pb-4">
            Join Us In Exploring The Entire World
          </h1>
          <p className="text-gray-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, illum temporibus aliquid distinctio eligendi nostrum
            porro molestiae ea, necessitatibus
          </p>
          <br />
          <p className="text-gray-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            error corrupti ex aperiam doloribus error corrupti ex aperiam
            doloribus
          </p>
          <div className="flex flex-wrap mt-8">
            {ABOUT.map((about) => (
              <AboutItem
                key={about.title}
                title={about.title}
                icon={about.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
type AboutItem = {
  title: string;
  icon: string;
};

const AboutItem = ({ title, icon }: AboutItem) => {
  return (
    <div className="w-1/2 flex gap-2 mb-4">
      <Image src={icon} alt="icon" height={20} width={20} />
      <p className="regular-14">{title}</p>
    </div>
  );
};
export default About;
