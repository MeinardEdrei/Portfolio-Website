'use client'

import Link from "next/link";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaFigma, FaGitAlt, FaJava, FaLinux, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiCloudinary, SiCplusplus, SiMysql, SiVite } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiVim } from "react-icons/di";
import { AiOutlineDotNet } from "react-icons/ai";
import Image from "next/image";

const AboutMePage = () => {
  return (
    <div>
      <section className="flex justify-center items-center">
        <div
          className="bg-[var(--secondary-background)] shadow-xl border-[1px] border-white/15 w-[90%] md:w-[70%] h-full rounded-md"
          style={{
            animation: "slide-in .3s ease-out forwards, wobble .5s ease-in-out .3s"
          }}
        >
          <div className="flex justify-center items-center bg-[--primary] rounded-t-md p-2 text-sm text-[var(--text-inverted)] font-mono">
            about-me~
          </div>

          <div className="md:px-10 py-16 md:py-24">
            <div className="p-6 md:px-10">
              {/* Profile Section */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
                <div className="md:col-span-4 flex justify-center">
                  <Image
                    src="/pfp.png"
                    width={250}
                    height={250}
                    alt="Profile Image"
                    className="object-cover rounded-2xl shadow-md"
                  />
                </div>

                <div className="md:col-span-8">
                  <h1 className="text-xl md:text-2xl font-semibold mb-4">
                    -- Hi, I'm Meinard 👋🏼
                  </h1>

                  <div className="space-y-4 max-w-lg">
                    <p>
                      A Full-Stack Developer pursuing a Bachelor of Computer Science in Application Development at the University of Makati.
                    </p>
                    <p>
                      I lead projects in web development, UI/UX design, and executable applications.
                      Recently, I managed and developed Eventure, an event management platform for the university.
                    </p>
                    <p>
                      Passionate about staying up-to-date with emerging technologies, I am constantly working on side projects and exploring new ideas to enhance my skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* Questions and Tech Stack Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Questions Section */}
                <div className="bg-[var(--secondary-background)] p-6 rounded-lg border-[1px] border-white/10 shadow-md">
                  <h2 className="text-lg md:text-2xl font-semibold mb-4">
                    -- 🔎️ Questions
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Interested in hiring me to work on a project?</h3>
                      <p className="ml-4">
                        I'm proficient in full-stack development and project management, and I also have experiences in application development so if you have an offer, feel free to message or email me!
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Want to hire me as a freelancer/intern?</h3>
                      <p className="ml-4">
                        <Link href="https://www.instagram.com/meinardedreii/" className="underline">Message</Link> or{" "}
                        <Link href="/Contact" className="underline">Email</Link> me so that we can discuss about it!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technology Stack Section */}
                <div className="bg-[var(--secondary-background)] p-6 rounded-lg border-[1px] border-white/10 shadow-md">
                  <h2 className="text-lg md:text-2xl font-semibold mb-4">
                    -- 💻 Technology Stack
                  </h2>

                  <div className="flex flex-wrap gap-3 text-4xl md:text-5xl">
                    <FaLinux />
                    <RiNextjsFill />
                    <RiReactjsFill />
                    <FaNodeJs />
                    <RiTailwindCssFill />
                    <FaGitAlt />
                    <SiCplusplus />
                    <TbBrandCSharp />
                    <FaJava />
                    <SiMongodb />
                    <SiMysql />
                    <FaPhp />
                    <FaFigma />
                    <DiVim />
                    <SiVite />
                    <AiOutlineDotNet />
                    <SiCloudinary />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMePage;
