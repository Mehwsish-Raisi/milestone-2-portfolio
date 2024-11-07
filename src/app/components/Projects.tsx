import React from "react";
import Link from "next/link";
import Image from "next/image";


const Projects = () => {
  return (
    <div id="projects">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              Here are my some projects... Bringing ideas to life with
              TypeScript, Next.js, and Tailwind CSS, Explore my latest web
              development projects and see innovation in action!
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Projects */}

            <div className="lg:w-1/3 sm:w-1/2 p-4"  data-aos="flip-up">
              <Link
                href="https://countdown-timer-01-zeta.vercel.app/"
                target="_blank"
              >
                <div className="flex relative">
                  <Image
                    alt="project 01"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/istockphoto.jpg"
                    width={600}
                    height={360}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-amber-600 mb-1">
                      Project 01
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Countdown Timer
                    </h1>
                    <p className="leading-relaxed">
                      Built with Next.js and Tailwind CSS for sleek and dynamic
                      time tracking!
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <Link href="https://my3rd-assignment.vercel.app/" target="_blank">
                <div className="flex relative">
                  <Image
                    alt="project 02"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/assignment-2.webp"
                    width={600}
                    height={360}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-amber-600 mb-1">
                      Project 02
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Class Assignment
                    </h1>
                    <p className="leading-relaxed">
                      Completed my 3rd assignment given by{" "}
                      <strong>Sir Hamza</strong>, using Next.js and Tailwind
                      CSS!
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="flip-up">
              <Link
                href="https://resume-iota-hazel.vercel.app/"
                target="_blank"
              >
                <div className="flex relative">
                  <Image
                    alt="project 03"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/resume.jpg"
                    width={600}
                    height={360}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-amber-600 mb-1">
                      Project 03
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Dynamic Resume Builder
                    </h1>
                    <p className="leading-relaxed">
                      I&apos;m thrilled to announce that I&apos;ve completed a
                      challenging 5-milestone hackathon!
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
