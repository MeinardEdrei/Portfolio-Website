'use client'
import Link from "next/link";
import { FaSquareXTwitter, FaSquareFacebook, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <section className="flex justify-center items-center">
        <div className="bg-[var(--secondary-background)] shadow-xl border-[1px] border-white/15 md:w-[70%] w-[90%] h-full rounded-md"
          style={{
            animation: "slide-in .3s ease-out forwards, wobble .5s ease-in-out .3s"
          }}
        >
          <div className="flex justify-center items-center bg-[--primary] rounded-t-md p-2 text-sm text-[var(--text-inverted)]">Contact</div>
          <div className="flex flex-col p-5 md:px-10">
            <div className="md:px-10 py-20">
              <div>
                <h1 className="md:text-2xl text-lg font-semibold mb-5">
                  -- 🔗 Connect with Me
                </h1>
                <p className="max-w-sm">
                  I welcome the opportunity to discuss your project. Please contact me via <Link href='https://mail.google.com/mail/?view=cm&fs=1&to=meinardsantoss@gmail.com' className="font-medium underline">email</Link> to schedule a consultation.
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-16">
                <h1 className="font-medium">
                  -- 🔗 Professional Networks
                </h1>
                <div className="flex gap-2 md:text-3xl text-2xl">
                  <Link href='https://www.instagram.com/meinardedreii/' aria-label="Instagram">
                    <FaSquareInstagram
                    />
                  </Link>
                  <Link href='https://x.com/meinardedrei' aria-label="X/Twitter">
                    <FaSquareXTwitter
                    />
                  </Link>
                  <Link href='https://www.facebook.com/profile.php?id=100069723366579' aria-label="Facebook">
                    <FaSquareFacebook
                    />
                  </Link>
                  <Link href='https://github.com/MeinardEdrei' aria-label="GitHub">
                    <FaSquareGithub
                    />
                  </Link>
                  <Link href='https://www.tiktok.com/@meinardedrei' aria-label="TikTok">
                    <AiFillTikTok
                    />
                  </Link>
                  <Link href='https://www.linkedin.com/in/meinard-edrei-santos-8894532b7/' aria-label="LinkedIn">
                    <FaLinkedin
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
