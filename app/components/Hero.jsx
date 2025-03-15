import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center 
    justify-center gap-4"
    >
      <div>
        <Image src={assets.hero} alt="" className="rounded-full w-64" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Vladimir, a QA Engineer{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <p className="max-w-2xl mx-auto font-Ovo">
        I specialize in analyzing business requirements, creating test
        documentation, performing comprehensive manual testing, including
        functional, non-functional, and integration testing, to ensure the
        system operates seamlessly across all layers (API, database, and
        &nbsp;frontend). I have hands-on experience in both automated and manual
        testing of API functionality using Postman. I am proficient in SQL and
        use it to validate and verify data integrity, ensuring the accuracy of
        databases through comprehensive testing.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border borded-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/qa_engineer_cv.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
