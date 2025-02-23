'use client'

import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { FaFigma, FaGitAlt, FaJava, FaNodeJs, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus, SiMysql, SiVite } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiVim } from "react-icons/di";

const page = () => {
  return (
    <div>
      <section className="flex justify-center items-center">
        <div className="bg-[var(--secondary-background)] border-[1px] border-white/15 md:w-[70%] w-[90%] h-full rounded-md">
          <div className="flex justify-center items-center bg-[--primary] p-2 text-sm text-[var(--text-inverted)]">about-me~</div>
          <div className="flex flex-col gap-28 p-5">
            <div className="flex flex-col gap-5">
              <h1 className="md:text-2xl text-lg font-semibold">
                -- Hi, I’m Meinard 👋🏼
              </h1>
              <div className="flex flex-col gap-3">
                <p>
                  A Full-Stack Developer pursuing a Bachelor of Science in Application Development at the University of Makati.
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
            <div className="flex flex-col gap-5">
              <h1 className="md:text-2xl text-lg font-semibold">
                -- 🔎️ Questions
              </h1>
              <div className="flex flex-col gap-3">
                <h2>
                  Interested in hiring me to work on a project?
                </h2>
                <li>
                  I’m looking for a <i>software engineer</i> position or if you have an offer, please message or email me!
                </li>
                <h2>
                  Want to hire me as a freelancer/intern?
                </h2>
                <li>
                  <Link href="https://www.instagram.com/meinardedreii/" className="underline">Message</Link> or
                  <Link href="/Contact" className="underline">Email</Link> me so that we can discuss about it!
                </li>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="md:text-2xl text-lg font-semibold">
                -- 💻 Technology Stack
              </h1>
              <div className="flex flex-wrap gap-2 md:text-7xl text-5xl">
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
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}

export default page;
