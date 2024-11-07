import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" data-aos="zoom-out-up">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded w-[250px] h-[300px] mx-auto"
              alt="about picture"
              src="/pic.4.webp"
              width={400}
              height={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-4 leading-relaxed text-lg">
              I am a frontend developer with a strong foundation in HTML, CSS, and
              TypeScript, currently expanding my skills by learning Next.js.
              With a Bachelor of Commerce (BCom) from the University of Karachi,
              I bring both technical expertise and a solid understanding of
              business principles to my projects.</p>
              <p className="text-lg mb-8"> I enjoy building dynamic,
              responsive web applications and am always eager to explore new
              technologies and frameworks to enhance my development skills
            </p>
            <div className="flex justify-center" id="about">
              <a href="/cv/resume.pdf">
              <button className="inline-flex text-white bg-amber-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-900 rounded-full text-lg">
                View CV
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
