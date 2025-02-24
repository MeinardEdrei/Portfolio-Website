'use client'

import Link from "next/link";
import { FaSquareXTwitter, FaSquareFacebook, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <section className="flex justify-center items-center">
        <div className="bg-[var(--secondary-background)] border-[1px] border-white/15 md:w-[70%] w-[90%] h-full rounded-md"
          style={{
            animation: "slide-in .3s ease-out forwards, wobble .5s ease-in-out .3s"
          }}
        >
          <div className="flex justify-center items-center bg-[--primary] p-2 text-sm text-[var(--text-inverted)]">contact~</div>
          <div className="flex flex-col p-5 md:px-10">
            <div className="md:px-10 py-20">
              <div>
                <h1 className="md:text-2xl text-lg font-semibold mb-5">
                  -- 📥 Get in touch, let&apos;s talk.
                </h1>
                <p>
                  Feel free to send me an <Link href='https://mail.google.com/mail/?view=cm&fs=1&to=meinardsantoss@gmail.com' className="font-bold underline">email</Link> so that we can discuss things!
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-16">
                <h1 className="font-medium">
                  -- 📲 Try my other social media platforms!
                </h1>
                <div className="flex gap-2 md:text-3xl text-2xl">
                  <Link href='https://www.instagram.com/meinardedreii/'>
                    <FaSquareInstagram
                    />
                  </Link>
                  <Link href='https://x.com/meinardedrei'>
                    <FaSquareXTwitter
                    />
                  </Link>
                  <Link href='https://www.facebook.com/profile.php?id=100069723366579'>
                    <FaSquareFacebook
                    />
                  </Link>
                  <Link href='https://github.com/MeinardEdrei'>
                    <FaSquareGithub
                    />
                  </Link>
                  <Link href='https://www.tiktok.com/@meinardedrei'>
                    <AiFillTikTok
                    />
                  </Link>
                  <Link href='https://www.linkedin.com/in/meinard-edrei-santos-8894532b7/'>
                    <FaLinkedin
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default page;
