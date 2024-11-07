"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Hello! I&apos;m
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Front End Developer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              I am a front-end developer specializing in crafting engaging,
              responsive, and accessible user interfaces. I work primarily with
              HTML, CSS, JavaScript, and frameworks like Next.js and React to
              build dynamic, visually appealing web applications. My focus is on
              creating seamless user experiences that not only look great but
              also provide intuitive functionality across devices.
            </p>

            <div className="flex justify-center">
              <Link href="#contact">
                <button className="inline-flex text-white bg-amber-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded-full text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          {
            <div
              className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
              data-aos="zoom-in-right"
            >
              {
                <Image
                  className="object-cover object-center rounded-full mx-auto"
                  alt="hero"
                  width={350}
                  height={350}
                  src="/anime.png"
                />
              }
            </div>
          }
        </div>
      </section>
    </div>
  );
};

export default Hero;
