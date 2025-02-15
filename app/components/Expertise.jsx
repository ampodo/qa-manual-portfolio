import { serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Expertise = () => {
  return (
    <div id="expertise" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I provide</h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I can offer an all-encompassing range of testing services to ensure the quality
        and reliability of your&nbsp;application.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 
             hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
